## context
跨组件之间的数据传递
this.props   父 -> 子 -> 孙
context      父 -> 孙
被react-router react-redux 广泛使用
16.0
## 问题
shouldComponentUpdate
尽可能少渲染
return true
return false 不跟新
如果中间某个组件 shouldComponentUpdate false 后代组件不会更新

## context 16



















## 同一个事件，不同参数
- 方法一：
 handleToggleTheme = (e) =>{
   const theme = e.target.dataset.theme;
   this.setState({
     theme
   })
 }

<!-- 
  <button onClick={this.handleToggleTheme} 
  data-theme="purple"  //绑定参数
  >purple</button>

  <button onClick={this.handleToggleTheme}
  data-theme="yellowgreen"
  >yellowgreen</button> 
-->

- 方法二：
handleToggleTheme = (theme) => () =>{
  this.setState({
    theme
  })
}

<!-- 
  <button onClick={this.handleToggleTheme('purple')} 
  data-theme="purple"  //绑定参数
  >purple</button>

  <button onClick={this.handleToggleTheme('yellowgreen')}
  data-theme="yellowgreen"
  >yellowgreen</button> 
-->

- 方法三：
handleToggleTheme = (theme) => {
    this.setState({
      theme
    })
  }
第三种，一个加函数() => {}，另一个加bind
<!-- 
  <button onClick={() => {this.handleToggleTheme('purple')}} //第2种方法，加('purple')  
  data-theme="purple"  //绑定参数
  >purple</button>
  <button onClick={this.handleToggleTheme.bind(this,'yellowgreen')}
  data-theme="yellowgreen"
  >yellowgreen</button> 
-->