## async
async 函数就是 Generator 函数的语法糖

## generate 函数
```js
function* test() {
  console.log(1)
      let a = yield function foo(){
        console.log(789);
      };
      console.log('a', a);
      let b = yield 2;
      console.log('b', b);
      let c = yield 3
      console.log('c', c);
    } 
    // 惰性的
    var g = test();
```
通过 g.next() 一步一步调用
每一步调用 执行到 yield 关键词
通过传参 做可作为上一个 yield 语句的返回值