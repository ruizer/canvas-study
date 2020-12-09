module.exports = {
    base: "/canvas-study",
    title: "canvas核心技术",
    description: "关于html5 canvas的一些知识集锦",
    head: [["link", { rel: "icon", href: "//images/icon.png" }]],
    markdown: {
        lineNumbers: true,
        anchor: {
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: "#",
        },
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Github", link: "https://github.com/ruizer/canvas-study" },
        ],
        sidebar: {
            '/book/': [
                '/book/base',
                '/book/draw',
                '/book/text'
            ]
        },
    },
}
