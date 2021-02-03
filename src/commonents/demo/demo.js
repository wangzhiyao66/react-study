import "./demo.css";

import React from "react";

export default class DemoComponent extends React.Component {
  state = {};
  // 构造器 函数
  constructor(props) {
    super();
    this.state = {};
  }

  // 声明周期  - 挂载
  componentDidMount() {
    console.log("Demo props", this.props);
  }
  // 声明周期  - 销毁
  componentWillUnmount() {}

  // 渲染函数
  render() {
    return <div className="Demo">Demo</div>;
  }
}
DemoComponent.defaultProps = {
  // props
  name: "Demo",
};
