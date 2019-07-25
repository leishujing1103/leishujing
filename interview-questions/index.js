// function Person(name) {
//   this.name = name
// }
// let p = new Person('wn')
// 实例的隐式原型链等于其构造函数的显式原型链

// 1. p.__proto__等于什么 Person.prototype
// 2. Person.__proto__ == Function.prototype   Function.__proto__ == Object


// var foo = {},
//   F = function(){};
// Object.prototype.a = 'valA'  // Object是foo的父亲，foo继承Object的prototype
// Function.prototype.b = 'valB'  
// console.log(foo.a)  //valA
// console.log(foo.b)  //undefined
// console.log(F.a)
// console.log(F.b)

// Object
// Function
// F


// function Person(name) {
//   this.name = name
//   return 666
// }
// let o = new Person('wn')
// console.log(o)
//------- 构造函数是不需要返回值的，使用new来创建对象时
// 如果return的是非对象类型，会忽略返回值  P27行
// 如果return的是对象，则返回该对象(若return null，也会忽略返回值)



// function Person(name) {
//   this.name = name
// }
// function Student() {

// }
// 把Person复刻给Student，但是Person内的属性不会传递
// Student.prototype = Person.prototype
// Student.prototype.constructor = Student

// let s = new Student('wn')
// console.log(s instanceof Person)

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     // console.log(i)
//   }, 0);
// }
// 输出10个 10
// 若要输出0-9 则将 var 改成 let

//----------- let 每次循环会生成一个封闭的作用域和 setTimeout 绑定
//----------- 而var每次循环会覆盖掉上一次的作用域 

// 或者用闭包，模拟块级作用域
// for (var i = 0; i < 10; i++) {
//   (function(i) {
//     setTimeout(() => {
//       console.log(i)
//     }, 0);
//   })(i)
// }


// for in 和 for of 的区别
// for in 
// 1. index索引为字符串型的数字，不能直接进行几何运算
// 2. 遍历顺序有可能不是按照实际数组的内部顺序进行的
// 3. 使用for in 会遍历可枚举属性，包括原型链，所以for in更适合遍历对象

// for of
// 1. for in遍历的是数组的索引，for of遍历的是数组的元素
// 2. for of 遍历的只是数组内部内部的元素，而不包括数组原型属性和索引

// 遍历出来的是数组的下标，若要遍历出数组的值，则console.log(myArry[index])
// Array.prototype.method = function() {
//   console.log('wn')
// }
// var myArry = [1, 2, 3, 4, 5, 6, 7]
// myArry.name = 'wn'
// for (let index of myArry) {
//   console.log(index)
// }



let gArr = [1, 2, [3, 4], 5, [2, 7, [3, 9]]]
let oArr = [1, 2, 3, 4, 5, 2, 7, 3, 9]

// function outputArr(arr) {
//   let res = []
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//      res = res.concat(outputArr(arr[i])) //层层遍历，并拼接到res内
//     } else {
//       res.push(arr[i])
//     }
//   }
//   return res
// }

// reduce方法
function outputArr(arr) {
  return arr.reduce(function (pre, item) {
    return pre.concat(Array.isArray(item) ? outputArr(item) : item)
  }, [])
}
console.log(outputArr(gArr))