1. 三个容器 背后100%宽度 圆 已经拖了的进度条
2. touchStart  touchMove touchend
3. 改变 width left

```js
new Progress('selector', {
  onDrag: () => {},
  onDragStart: () => {},
  onDragEnd: () =>{},
  progress: 0.5,  //指定当前进度条
  disableDrag: false 
})
```