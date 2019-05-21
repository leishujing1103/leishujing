const err = (message) => {
    throw new Error(message);
}
function sum(num = err('first param is not defined'),  //先赋默认值
 otherNum = err('second param is not definde')) {
    return sum;
}

// console.log(1,2)  3
console.log(undefined,10);
// 报错，第一个参数没有意义
console.log(10)
// 报错，第二个参数没有定义