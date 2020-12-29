(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{354:function(e,a,n){e.exports=n.p+"assets/img/requestAnimationFrame.24ea1da7.png"},363:function(e,a,n){"use strict";n.r(a);var t=n(42),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"动画的基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动画的基本概念"}},[e._v("#")]),e._v(" 动画的基本概念")]),e._v(" "),t("h2",{attrs:{id:"动画就是运动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动画就是运动"}},[e._v("#")]),e._v(" 动画就是运动")]),e._v(" "),t("blockquote",[t("p",[e._v("动画本质上是图像按照事先设定好的顺序在一定的时间内的"),t("code",[e._v("动画序列变化运动")]),e._v("，而运动是一个物体随着时间在空间中改变它的位置；\n这种"),t("code",[e._v("动画序列变化运动")]),e._v("给我们最为直观的感受彷佛真实的在运动一般，从而产生动画效果。")])]),e._v(" "),t("h2",{attrs:{id:"帧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#帧"}},[e._v("#")]),e._v(" 帧")]),e._v(" "),t("p",[e._v("为什么这种"),t("code",[e._v("动画序列变化运动")]),e._v("在我们人眼看来就彷佛真实的在运动一般呢？")]),e._v(" "),t("p",[e._v("因为"),t("s",[e._v("我们不是上帝哈")]),e._v("\n人的眼睛是有欺骗性的，你所看到的动画无非是你的眼睛在欺骗你的大脑，本质上每一张图像还是那张图像，只不过它们在单位时间内按照一定的顺序在快速移动罢了。")]),e._v(" "),t("p",[e._v("这些图像就是我们所说的"),t("code",[e._v("帧(Frame)")]),e._v("，我们通常说"),t("code",[e._v("帧数")]),e._v("，简单地说，就是在1秒钟时间里传输的图像的"),t("code",[e._v("帧数")]),e._v("，也可以理解为图形处理器每秒钟能够刷新几次，通常用"),t("code",[e._v("fps（Frames Per Second）")]),e._v("表示。")]),e._v(" "),t("h2",{attrs:{id:"程序帧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#程序帧"}},[e._v("#")]),e._v(" 程序帧")]),e._v(" "),t("p",[e._v("通常超过"),t("code",[e._v("24fps")]),e._v("时，人眼就不能区分出真假了。\n所以一般电影只需要"),t("code",[e._v("24fps")]),e._v("就足够流畅了，而游戏需要"),t("code",[e._v("60fps")]),e._v("，我们设计动画时通常选用"),t("code",[e._v("60fps")]),e._v("，也就是我们所说的"),t("code",[e._v("程序帧")]),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"那我们怎么实现动画呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#那我们怎么实现动画呢"}},[e._v("#")]),e._v(" 那我们怎么实现动画呢？")]),e._v(" "),t("p",[e._v("正如先前所说，如果我们能够在每16ms（1秒60帧，1000/60）内渲染1张图像，并且每一张图像的内容发生微调，那么在1秒钟整个画面就会产生动画效果了。")]),e._v(" "),t("p",[e._v("这不就是定时任务吗？\n"),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval",target:"_blank",rel:"noopener noreferrer"}},[e._v("window.setInterval()"),t("OutboundLink")],1),e._v("是不是就能实现？")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function draw(){\n    ....\n}\nwindow.setInterval(draw, 16)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("那"),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout",target:"_blank",rel:"noopener noreferrer"}},[e._v("window.setTimeout()"),t("OutboundLink")],1),e._v("能不能实现呢？")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function draw(){\n    ....\n    window.setTimeout(draw, 16)\n}\nwindow.setTimeout(draw, 16)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("能够实现吗？看代码好像是可以的，不就是每16s执行一下吗？")]),e._v(" "),t("p",[e._v("但JS引擎是单线程的，在某一个特定的时间内只 能执行一个任务，并阻塞其他任务的执行，也就是说这些任务是串行的。详情见"),t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/10/event-loop.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript 运行机制"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("使用"),t("code",[e._v("setTimeout/setInterval")]),e._v("会出现不准时的问题，说好的 16 秒后执行，但是可能在 18 秒执行。还可能存在以下问题：")]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("动画作者对帧数没有掌控")]),e._v(" "),t("li",[e._v("当标签是隐藏状态（非当前显示的）时，无谓地消耗系统资源")]),e._v(" "),t("li",[e._v("setInterval 对自己调用的代码是否报错漠不关心。即使调用的代码报错了，它依 然会持续的调用下去（可以用 setTimeout 解决）")])])]),e._v(" "),t("p",[e._v("由于这些问题，所以我们有了"),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame",target:"_blank",rel:"noopener noreferrer"}},[e._v("requestAnimationFrame"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"requestanimationframe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requestanimationframe"}},[e._v("#")]),e._v(" requestAnimationFrame")]),e._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame",target:"_blank",rel:"noopener noreferrer"}},[e._v("window.requestAnimationFrame()"),t("OutboundLink")],1),e._v(" 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行")])]),e._v(" "),t("p",[e._v("类似于 setTimeout 定时器，同样的，若你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用"),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame",target:"_blank",rel:"noopener noreferrer"}},[e._v("window.requestAnimationFrame()"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("(function drawFrame(){\n    window.requestAnimationFrame(drawFrame);\n    \n    //some code for animation effect here\n})();\n\n上面的代码意思是立即执行drawFrame这个函数，发现  window.requestAnimationFrame(drawFrame)，根据浏览器的刷新频率(不同显示器刷新频率不一样60Hz或75Hz)，在一定时间之后执行；\n接下来执行你所编写的改变图像内容（图像的位置、宽高、颜色等等）的脚本，执行回调；\n循环反复，形成动画效果\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("p",[e._v("当然这个API是有兼容性问题的，不过新版的浏览器基本上都支持，"),t("a",{attrs:{href:"https://caniuse.com/?search=requestAnimationFrame",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://caniuse.com/?search=requestAnimationFrame"),t("OutboundLink")],1),e._v(" "),t("img",{attrs:{src:n(354),alt:"An image"}})]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("当部分浏览器不兼容这个API时，我们也可以写成以下形式：\n\nif(!window.requestAnimationFrame){\n    window.requestAnimationFrame = (\n      window.webkitRequestAnimationFrame || \n      window.mozRequestAnimationFrame ||\n      window.msRquestAniamtionFrame ||\n      window.oRequestAnimationFrame || \n      function (callback){\n          return setTimeout(callback,Math.floor(1000/60))\n    }\n  )\n}\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br")])])])}),[],!1,null,null,null);a.default=s.exports}}]);