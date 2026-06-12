const categoryLabels = new Map(
    categoryOptions.map((category) => [category.value, category.label])
);

const activeFilters = {
    category: "all",
    type: "all",
    year: "all"
};

const worksList = document.getElementById("works-list");
const worksEmpty = document.getElementById("works-empty");

function createFilterButton(label, value, filterName) {
    const button = document.createElement("button");
    button.className = "filter-button";
    button.type = "button";
    button.textContent = label;
    button.dataset.filter = filterName;
    button.dataset.value = value;
    button.setAttribute("aria-pressed", String(activeFilters[filterName] === value));
    button.addEventListener("click", () => {
        activeFilters[filterName] = value;
        updateFilterButtons();
        renderWorks();
    });
    return button;
}

function renderFilters() {
    const categoryFilters = document.getElementById("category-filters");
    const typeFilters = document.getElementById("type-filters");
    const yearFilters = document.getElementById("year-filters");
    const years = [...new Set(worksData.map((work) => work.year).filter(Boolean))]
        .sort((a, b) => Number(b) - Number(a));

    categoryOptions.forEach((category) => {
        categoryFilters.appendChild(
            createFilterButton(category.label, category.value, "category")
        );
    });

    typeOptions.forEach((type) => {
        typeFilters.appendChild(
            createFilterButton(type.label, type.value, "type")
        );
    });

    yearFilters.appendChild(createFilterButton("ALL YEAR", "all", "year"));
    years.forEach((year) => {
        yearFilters.appendChild(createFilterButton(year, year, "year"));
    });
}

function updateFilterButtons() {
    document.querySelectorAll(".filter-button").forEach((button) => {
        const isSelected = activeFilters[button.dataset.filter] === button.dataset.value;
        button.setAttribute("aria-pressed", String(isSelected));
    });
}

function createWorkCard(work) {
    const article = document.createElement("article");
    const body = document.createElement("div");
    const title = document.createElement("h2");
    const meta = document.createElement("p");
    const description = document.createElement("p");
    const imageSources = work.images || [work.image];

    article.className = "work-card";
    body.className = "work-card-body";
    title.textContent = work.title;
    meta.className = "work-meta";
    meta.textContent = [work.year, work.kind, categoryLabels.get(work.category)]
        .filter(Boolean)
        .join(" / ");
    description.className = "work-description";
    description.textContent = work.description;

    const images = imageSources.map((source, index) => {
        const image = document.createElement("img");
        image.className = "work-image";
        image.src = source;
        image.alt = work.alt || work.title;
        image.loading = "lazy";
        image.decoding = "async";
        if (imageSources.length > 1) {
            image.alt = `${work.alt || work.title} ${index + 1}`;
        }
        return image;
    });

    body.append(title, description, meta);
    if (images.length > 1) {
        const imageStrip = document.createElement("div");
        imageStrip.className = "work-image-strip";
        imageStrip.setAttribute("aria-label", `${work.title}の画像一覧`);
        imageStrip.append(...images);
        article.append(imageStrip, body);
    } else {
        article.append(images[0], body);
    }
    return article;
}

function renderWorks() {
    const visibleWorks = worksData.filter((work) => {
        const matchesCategory = activeFilters.category === "all"
            || work.category === activeFilters.category;
        const matchesType = activeFilters.type === "all"
            || work.kind === activeFilters.type;
        const matchesYear = activeFilters.year === "all"
            || work.year === activeFilters.year;
        return matchesCategory && matchesType && matchesYear;
    });

    worksList.replaceChildren(...visibleWorks.map(createWorkCard));
    worksEmpty.hidden = visibleWorks.length !== 0;
}

renderFilters();
renderWorks();
