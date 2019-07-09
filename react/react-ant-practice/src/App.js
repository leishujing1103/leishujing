import React, { Component } from 'react';  //解构一下component
import { Button, Icon } from 'antd'; //引入按钮组件,解构一下Icon
import TouchableOpacity from './TouchableOpacity'; // 导入
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';  //导入样式

const size = 'large';
class App extends Component {
  constructor(props) {
    super(props);
    this.functionRef = null;
    this.objectRef = React.createRef();
    this.inputRef = React.createRef();
  }
  // changeOpacity = (touchStart) => {
  //   console.log(touchStart)
  // }
  state = {
    value:''
  }
  handleInputChange = (e) => {
    let value = e.target.value;
    value = value.slice(0, 10);
    this.setState ({
      value
    })
  }
  componentDidMount() {
    // 组件挂载在页面上 jsx转成DOM
    // 通过原生 js 操作 dom
    this.refs.strRef.innerHTML = 'String ref';
    this.functionRef.innerHTML = 'Function ref';
    this.objectRef.current.innerHTML = 'Object ref';
   
    // this.functionRef.addEventListener('click', () => {
    //   console.log('function ref clicked');
    // })

  }
  handlePrint1 = () => {
    console.log(this.inputRef.current.value);
  }
  render() {
    return (
      <div>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
          <br />
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Normal</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <Button type="danger" size={size}>
          Danger
        </Button>
        <Button type="link" size={size}>
          Link
        </Button>
        <br />
        <Button type="primary" shape="circle" icon="download" size={size} />
        <Button type="primary" shape="round" icon="download" size={size}>
          Download
        </Button>
        <Button type="primary" icon="download" size={size}>
          Download
        </Button>
        <br />
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left" />
            Backward
          </Button>
          <Button type="primary">
            Forward
            <Icon type="right" />
          </Button>
        </Button.Group>
        
        {/* 导入后应用 */}
        <TouchableOpacity>  
          确定
          <a href="">确定</a>
        </TouchableOpacity>
        <TouchableOpacity>  
          取消
        </TouchableOpacity>
        </div>
        <h1 ref="strRef"></h1>
        <h1 ref={(node) => { //ref是一个方法，能得到原生的结点
          this.functionRef = node;  //
        }}></h1>
        <h1 ref={this.objectRef}></h1>

        {/* 非受控：原生ref */}
        <input type="text" ref={this.inputRef}/>  
        <button onClick={this.handlePrint1}>btn1</button>

        {/* 受控：结合value值和onChange事件 
        value
        state 来源应该单一，value应该来自 state
        */}
        <input type="text" value={this.state.value} onChange={this.handleInputChange} />
        <button onClick={this.handlePrint2}>btn2</button>
      </div>
    );
  }
}

export default App;
