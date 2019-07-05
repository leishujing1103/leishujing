import React, { Component } from 'react'
function foo(a) {
    console.log(a)
}
class Demo1 extends Component {
    render() {  // 返回的东西都是用户可以看到的
        console.log(this.props)  // 接收从App传来的值
        return (
            <div style={{backgroundColor: 'red'}} 
            onClick={() => {
                const { onClick } = this.props //接收父组件传过来的函数
                onClick('内容来自 子组件');  //调用onClick时传数据
            }}>
                Demo1
            </div>
        )
    }
}
export default Demo1;