## why
以前async mode 现在concurrent mode,
目的：让react整体渲染有一个优先级的排比
1. js是单线程的
2. 浏览器是多线程的
  1. UI 渲染线程
  2. js 解析
  3. http 
3. js 线程和 ui 是互斥的，js 可以操作 dom
4. 卡顿，js 执行占据了很大的空间，导致 UI 得不到响应