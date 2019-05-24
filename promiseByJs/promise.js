function MyPromise(callback) {  // 用MyPromise方法的时候，要传一个参
    var self = this
    var state = null
    // 记录resolve的参数
    var param = null

    // 执行传入的**方法并改变promise对象的状态
    callback(resolve, reject)

    // 定义resolve方法
    function resolve(data) {
        let parmise 
        // 改变状态
        state = true  //resolve方法执行成功，能抛出一个东西出来
        param = data
        nextResolve(asynconFulfilled(param))
        // 执行记录onFullfilled
        parmise = asynconFulfilled(param)
        if (parmise === undefined) {
            // 如果parmise === undefined，就不能解析parmise.constructor
        } else if (parmise.constructor === self.constructor) {
            // 等待传递进来的promise对象执行完毕，然后根据传递进来的promise对象的执行状态，来执行resolve或者reject
            // param参数是个形参，在then方法的promise中执行
            promise.then (function(param) {
                resolve(param)
            },function(param){
                reject(param)
            }) 
        } else {
            // 这是前面的then方法没有返回promise对象
            resolve(promise)
        }

    }
    // reject方法
    function reject(err) {
        state = false
        param = err
        nextReject(asynconRejected(param))
    }

    var nextResolve = null
    var nextReject = null
    // 记录then方法的参数，onFullfilled,onRejected
    var asynconFulfilled = null
    var asynconRejected = null
    
    this.then = function(onFulfilled, onRejected) {//this作用域于MyPromise上，给他绑定一个then方法
        // 返回一个新的promise对象
        return new self.constructor(function(resolve, reject) {
            if (state === true){
                // param 是promise对象完成后的结果
                resolve(onFulfilled(param))
            } else if (state === false) {
                reject(onRejected(param))
            } else {
                nextResolve = resolve
                nextReject = reject
                asynconFulfilled = onFulfilled
                asynconRejected = onRejected

            }
        })
    }
}