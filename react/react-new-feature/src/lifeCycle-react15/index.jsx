import React, { Component } from 'react';
/**
 * 第一次挂载：
 * 更新：Props时、state改变时、卸载时
 */
class Index extends Component {
  state = {
    count: 0
  }
  handleCountAdd = () => {
    let { count } = this.state;
    count ++;
    this.setState({
      count
    })
  }

  // 挂载
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentWillReceiveProps(prevProps, nextProps) {
    console.log('componentWillReceiveProps');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // 跟新

  render() {
    const { ParentCount } = this.props;
    return (
      <div>
        <button onClick={this.handleCountAdd}>
          handleCountAdd
        </button>
      </div>
    )
  }
}

export default Index;