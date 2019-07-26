## Map
类似于一个js 对象{}
Object.key() 获取对象下面所有的key
作用： 优化逻辑判读
1. if else  swith-case  这时可以用map
2. 被新的 api 支持 URLSearchParams

区别
{} 的key 是字符串Symbol 其他类型在遍历 key 的时候出现 toString() 的问题
app [object, HTMLelement];
Map() key 支持各个类型


## es6的理解
es6是相对于es5 ECMAScript 的第六次修订 ES2015
随着构建 babel webpack构建工具的成熟
es6 已成为 js 编程的事实标准
我认为 es6 比 es5 更加简洁，提高了开发效率，让 js 代码更加优雅

- 新增的特性
  let 和 const 常量声明，具有 var 没有的块级作用域，比如循环事件监听时，闭包就不需要了，让代码更好理解
  var 有变量提升的能力，let const 不会到顶级对象，使用的变量或常量一定要声明

- 箭头函数 
  简化了函数的表达形式
  1. 不用function关键字 () => {}
  2. 如果只有一个参数，() 也可以省掉
  3. 如果代码直接返回，{} 也可以省掉 右侧的代码就是返回值
  4. 有效地规避了this丢失的问题 指向上一级

- 模板字符串
  增强版的字符串，用``云括号，他的多行表达方式，特别适合react jsx template的书写
  DOM 或 HTML模板的构建 更加优雅

- 解构赋值
  可解，spread  可合，reset 从对象或数组中提取值，对变量进行赋值，提高开发效率
 
- for of 循环
  for 计步循环，对数组友好，但是对象，set，map
  类数组以及字符串都可以遍历

- SET 
  es6新增的数据结构，类似数组，提供唯一的，没有重复的值

- import export 
  es6的模块化，es6原生支持的module，将js代码分割成不同的小块独立开发
  一个文件一个类，一个独立的模块，比如说utils api

- ... 展开运算符
- 终于支持原生的class关键字了，让 js 有了传统面向对象的写法，extends 
  不过他只是语法糖，底层还是基于原型的面向对象

- promise
  为 js 提供了异步解决方案，规避了回调地狱(.then) 以代码的书写和执行是一样的

- 更棒的异步解决方案 es7 的async await
  koa 就是基于async await 快速取代了express的江湖地位

- vue react 响应式编程依赖的proxy
  defineProperty 监听对象的改变，做一些事情

- es6 提供了新的数据类型，Symbol

