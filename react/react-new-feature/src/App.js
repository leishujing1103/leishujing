import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ConcurrentModeDemo from './concurrent/index';
import Index from './lifeCycle-react15/index';
// hooks 对function组件的增强
function App() {
   //解构数组useState的第一项，parentCount是值，setParentCount是方法
  const [ parentCount, setParentCount ] = useState(0); 
  return (
    <div>
      {/* <ConcurrentModeDemo /> */}
      <button onClick={() => {
        setParentCount( parentCount + 1)
      }}>setParentCount</button>
      <Index parentCount={parentCount}/>
    </div>
  );
}
export default App;
