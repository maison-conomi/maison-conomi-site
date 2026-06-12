// 絞り込み項目を増やしたいときは、ここへ選択肢を追加します。
const categoryOptions = [
    { value: "all", label: "ALL" },
    { value: "illustration", label: "表紙・挿絵" },
    { value: "book", label: "本・絵本" },
    { value: "logo", label: "ロゴ" },
    { value: "app-design", label: "アプリ素材" },
    { value: "vocaloid-music", label: "ボカロ・音楽向け" },
    { value: "vtuber", label: "Vtuber" },
    { value: "goods", label: "グッズ" }
];
const typeOptions = [
    { value: "all", label: "ALL" },
    { value: "お仕事", label: "お仕事" },
    { value: "自主制作", label: "自主制作" }
];

// 作品を追加するときは、画像を対応するフォルダに入れ、この配列へ1件追加します。
const worksData = [
    {
        title: "絵本　陽だまりのねこ　[表紙・挿絵]",
        year: "2025",
        category: "illustration",
        kind: "お仕事",
        images: [
            "images/works/client/hidamari-neko-cover-site.webp",
            "images/works/client/hidamari-neko-p1-p2-site.webp",
            "images/works/client/hidamari-neko-p7-p8-site.webp",
            "images/works/client/hidamari-neko-p17-p18-site.webp"
        ],
        description: "倉田英治様"
    },
    {
        title: "灯り帖　アプリ素材デザイン",
        year: "2025",
        category: "app-design",
        kind: "お仕事",
        image: "images/works/client/akari-note-app-site.webp",
        description: "himecat様"
    },
    {
        title: "みつばメモ　アプリ素材デザイン",
        year: "2025",
        category: "app-design",
        kind: "お仕事",
        image: "images/works/client/mitsuba-memo-app-site.webp",
        description: "himecat様"
    },
    {
        title: "ほかほかパンダの絵本",
        year: "2025",
        category: "book",
        kind: "自主制作",
        image: "images/works/original/panda-ehon-site.webp",
        description: "ほかほかパンダの世界をもとに制作したオリジナル絵本です。"
    },
    {
        title: "おさんぽきろく　岐阜編",
        year: "2025",
        category: "book",
        kind: "自主制作",
        image: "images/works/original/tabibon-site.webp",
        description: "旅の空気や小さな物語を一冊にまとめた自主制作本です。"
    },
    {
        title: "クリスマスツリータペストリー　[デザイン・イラスト制作]",
        year: "2025",
        category: "goods",
        kind: "お仕事",
        image: "images/works/client/christmas-tree-tapestry-site.webp",
        alt: "クリスマスツリータペストリー",
        description: "ロッカクリエイト様"
    },
    {
        title: "Alright　アートワーク",
        year: "2025",
        category: "vocaloid-music",
        kind: "お仕事",
        image: "images/works/client/sky-blue-artwork-site.webp",
        description: "Sky Blue様"
    },
    {
        title: "「さみしくなくて、うみにもいける、わたしのおへや」　Vtuber背景素材　BOOTH",
        year: "2025",
        category: "vtuber",
        kind: "自主制作",
        images: [
            "images/works/client/oheya-basic-set-site.webp",
            "images/works/client/oheya-sea-set-site.webp",
            "images/works/client/oheya-christmas-set-site.webp",
            "images/works/client/oheya-new-year-set-site.webp"
        ],
        description: "BOOTHにて販売中のVtuber背景素材です。"
    },
    {
        title: "らびちゃんといっしょ　Vtuber背景素材",
        year: "2024",
        category: "vtuber",
        kind: "お仕事",
        image: "images/works/client/lavie-vtuber-background-site.webp",
        description: "Lavie様"
    },
    {
        title: "クレクス先生のふしぎな学園　[表紙・挿絵]",
        year: "2024",
        category: "illustration",
        kind: "お仕事",
        image: "images/works/client/kurex-gakuen-site.webp",
        description: "ロッカクリエイト様"
    },
    {
        title: "クレクス先生のふしぎな旅　[表紙・挿絵]",
        year: "2024",
        category: "illustration",
        kind: "お仕事",
        image: "images/works/client/kurex-tabi-site.webp",
        description: "ロッカクリエイト様"
    },
    {
        title: "クレクス先生のがいせん　[表紙・挿絵]",
        year: "2024",
        category: "illustration",
        kind: "お仕事",
        image: "images/works/client/kurex-gaisen-site.webp",
        description: "ロッカクリエイト様"
    },
    {
        title: "himecat ロゴ",
        year: "2024",
        category: "logo",
        kind: "お仕事",
        image: "images/works/client/himeCat-logo-site.webp",
        description: "himecat様"
    },
    {
        title: "ウォールステッカー",
        year: "2025",
        category: "goods",
        kind: "自主制作",
        image: "images/works/original/sticker-site.webp",
        description: "ほかぱんがまるでお部屋にいるかのようなウォールステッカーです。"
    },
    {
        title: "ぬいぐるみ",
        year: "2025",
        category: "goods",
        kind: "自主制作",
        image: "images/works/original/nuigurumi-site.webp",
        description: "ほかほかパンダのぬいぐるみ。"
    }
];
