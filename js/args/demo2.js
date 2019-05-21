// 1. userObj 一个参数带来了新的问题
// 代码的函数编写者，对于user里面的key 要去了解
// 只需要用一部分，解构可以帮助提高代码的可读性

function information ({name, age, height}) {
    console.log(name, age, height)
}
const user = {
    name: '朱萌萌',
    age: 20,
    height: 1.5,
    sex: '女',
    hobbies: ['打游戏']
}
console.log(information(user));