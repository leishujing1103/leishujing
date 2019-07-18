// debounce防抖 网不好时，防止用户多次点击，在某个时间段内只能点一次不能点第二次
export function debounce (func, delay) {
  let timer
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}