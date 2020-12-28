module.exports = {
    base: "/canvas-study/",
    title: "canvas动画",
    description:
        "如何借助 Canvas 和数学物理的知识在 Web 上创建交互式动画；基础动画、高级动画、3D 动画；动画的基本概念、动画中的三角学、速度向量和加速度、边界和摩擦力、用户交互、缓动和弹动的原理、碰撞检测、撞球物理、粒子与万有引力、从 2D 到 3D 等等；",
    head: [["link", { rel: "icon", href: "//images/favicon.png" }]],
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
            { text: "主页", link: "/" },
            { text: "Github", link: "https://github.com/ruizer/canvas-study" },
        ],
        sidebar: {
            "/book/": [
                {
                    title: "运动和三角函数",
                    collapsable: false,
                    path: "/book/move-triangle/",
                    children: [
                        "move-triangle/01",
                        "move-triangle/02",
                        "move-triangle/03",
                    ],
                },
            ],
        },
    },
}
