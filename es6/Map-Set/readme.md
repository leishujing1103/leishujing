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
