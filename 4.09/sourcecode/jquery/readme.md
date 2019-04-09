DOM树 有html解构，再加上css，DOM树将被生成，静态页面就有了。
document上 DOMContentLoaded 有了元素节点，就可以做js 交互了
页面上还依赖于其他的一些资源 比如说js, 阻塞下载，img 时网页性能的杀手
window.onload 此时写js就晚了

如果不等时间的发生，js 操作有可能无效