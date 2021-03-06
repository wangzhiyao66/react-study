import "./demo.css";

import React from "react";
import PropTypes from "prop-types";
// redux Link: https://github.com/reduxjs/redux  
// react-redux  
// 1. privader 组件使用。
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
  componentWillUnmount() { }

  // 渲染函数
  render() {
    return <div className="Demo">Demo</div>;
  }
}

// 定义数据 输入类型，直接使用 Typescript 不好吗？ 同 LINK:https://react.docschina.org/docs/typechecking-with-proptypes.html
DemoComponent.propTypes = {
  name: PropTypes.string,
}

DemoComponent.defaultProps = {
  // props
  name: "Demo",
};
