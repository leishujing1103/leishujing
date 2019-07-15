import React, { Component } from 'react';
import propTypes from 'prop-types';  
class Context15 extends Component {
  state = { 
    theme: 'red'
   }
  // 后代组件从这里取信息
  getChildContext () {
    return {
      theme: this.state.theme
    }
  }
  // 1
  // handleToggleTheme = (e) =>{
  //   const theme = e.target.dataset.theme;
  //   this.setState({
  //     theme
  //   })
  // }

  // 2
  // handleToggleTheme = (theme) => () =>{
  //   this.setState({
  //     theme
  //   })
  // }
  // 3
  handleToggleTheme = (theme) => {
    this.setState({
      theme
    })
  }
  render() { 
    const msg = ['str1', 'str2', 'str3'];
    return ( 
      <div>
        {
          msg.map((item, i) =>{
            return (
              <Message key={i}  text ={item}/>
            )
          })
        }
        <button onClick={() => {this.handleToggleTheme('purple')}} //第2种方法，加('purple')  第三种，加一个函数() => {}
        data-theme="purple"  //绑定参数
        >purple</button>
        <button onClick={this.handleToggleTheme.bind(this,'yellowgreen')}
        data-theme="yellowgreen"
        >yellowgreen</button>
      </div>
     );
  }
}
/**
 * function Person() {}
 * Person.childContextType = {}
 * 静态属性 或用static
 */
Context15.childContextTypes = {
  theme: propTypes.string
}
class Message extends Component {
  render() {
    const {text} = this.props;
    return(
      <li>
        { text }
        <MyButton />
      </li>
    )
  }
}
class MyButton extends Component {
  // 约束数据类型为string
  static contextTypes = {
    theme: propTypes.string
  }
  render() {
    const { theme } = this.context;
    return (
      <button style={{color: theme}}>delete</button>
    )
  }
}
export default Context15;