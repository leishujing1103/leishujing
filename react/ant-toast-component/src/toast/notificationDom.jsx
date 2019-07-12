import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Notice from './Notice'
class Notification extends Component {
  // type, content, duration, onClose
  state = {
    notices: [

    ]
  }
  generateKey = () => {
    const { notices } = this.state;
    return `notice-${new Date().getTime()}-${notices.length}`  //当前时间戳-当前长度=唯一的key
  }
  addNotice = (notice) => {
    console.log('notice', notice)
    const notices = this.state.notices.slice(0);
    const key = this.generateKey();
    notice.key = key;
    notices.push(notice);
    this.setState({
      notices
    })
  }
  render() { 
    const { notices } = this.state;
    return (
      <TransitionGroup className="toast-notification">
       {
         notices.map((notice) => {
           return (
             <CSSTransition timeout={300} key={notice.key}>
               <Notice {...notice}/>
             </CSSTransition>
           )
         })
       }
      </TransitionGroup>
    );
  }
}
/**
 * <App>
 * <Notification />
 * </App>
 */
 // 可以获取组件的实例
 
function createNotification() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const ref = React.createRef();
  ReactDOM.render(<Notification ref={ref}/>, div);
  return {
    addNotice(notice) {
      return ref.current.addNotice(notice);
    }
  }
}
export default createNotification()