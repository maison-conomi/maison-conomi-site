(() => {
    const isImageTarget = (target) => {
        return target instanceof Element && Boolean(target.closest("img"));
    };

    const protectImages = () => {
        document.querySelectorAll("img").forEach((image) => {
            image.setAttribute("draggable", "false");
            image.addEventListener("dragstart", (event) => {
                event.preventDefault();
            });
        });
    };

    document.addEventListener("contextmenu", (event) => {
        if (isImageTarget(event.target)) {
            event.preventDefault();
        }
    });

    document.addEventListener("DOMContentLoaded", protectImages);
})();
