import React, { Component } from 'react';
import './btn.css';
class TouchableOpacity extends Component {
  state = { 
    active: false  // 开始前状态
   }
  handleStart = () => {
    this.setState({
      active:true
    })
    
  }
  handleEnd = () => {
    this.setState({
      active:false
    })
  }
  render() { 
    const { active } = this.state;  //解构active
    const styleObj = {
      opacity: active ? 0.3 : 1
    }
    return ( 
      <div className="btn" style={styleObj}  
      onTouchStart={this.handleStart} 
      onTouchEnd={this.handleEnd}
      >
        { this.props.children }
      </div>
     );
  }
}
 
export default TouchableOpacity;