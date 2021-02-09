import "./home.css";

// Fragment  占位符  也来 React;
import React, { Component, Fragment } from "react";

export default class HomeComponent extends Component {
  state = {};
  // 构造器 函数
  constructor(props) {
    super();
    this.state = {};
  }

  // 声明周期  - 挂载
  componentDidMount() {
    console.log("Home props", this.props);
  }
  // 声明周期  - 销毁
  componentWillUnmount() {}

  // 渲染函数
  render() {
    return (
      <Fragment> 
        <div className="home-box">Home</div>
      </Fragment>
    );
  }
}
HomeComponent.defaultProps = {
  // props
  name: "Home",
};
