import React from 'react';
import logo from './logo.svg';
import Demo1 from './Demo1';
import Demo2 from './Demo2'
import './App.css';

function renderStr() {
  return 'string'
}
function App() {
  const age = 18;
  const styObj = { color: 'blue' }
  const foo = () => { console.log('blue')}
  const bar = () => {
    return function() {
      console.log('bar');
    }
  }
  const lis = [
    <li>1</li>,
    <li>2</li>,
    <li>3</li>,
  ]
  const names = ['name1', 'name2', 'name3']
  const namesNodes =  names.map((name, index) => {
    return (<div style={styObj}>
      { name }
    </div>)
  })

  return (
    <div>
    {/* 引入组件 */}
      <Demo1 names={names} from="App" onClick={(a) => {
        console.log(a);
      }}/>   {/* 组件通信 */}
      <Demo2 names={names} from="App"/>

    {/* 写在行内 */}
      <p style={{ color: 'red' }} onClick={ () => {
        console.log('red')
      }}> { age } </p>  

    {/* 先定义，在使用 */}
      <p style={styObj} onClick={foo}>{ age }</p>  

      <p onClick={bar()}>{age}</p>

    {/* {}能展开的只有数组 */}
      { lis }

    {/* 遍历数组 */}
      {
        names.map((name, index) => {
          return (<div>
            { name }
          </div>)
        })
      }

      { namesNodes }

      { renderStr() }

    {/* 三目运算符 */}
      {true ?
        <div>登录</div> :
        <a href="#">登录</a>
      }
    </div>
  );
}

export default App;
