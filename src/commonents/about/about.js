import "./about.css";

import React from "react";

export default class AboutComponent extends React.Component {
  state = {};
  // 构造器 函数
  constructor(props) {
    super();
    this.state = {};
  }

  // 声明周期  - 挂载
  componentDidMount() {
    console.log("About props", this.props);
  }
  // 声明周期  - 销毁
  componentWillUnmount() { }

  // 渲染函数
  render() {
    return <div class="Demo">About</div>;
  }
}

AboutComponent.defaultProps = {
  // props
  name: "About",
};
