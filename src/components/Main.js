require("normalize.css/normalize.css");
require("styles/App.css");

import React from "react";
// import Home from './home/home';
// import Arrlist from "./arrlist/arrlist";
import Dialog from "./dialog/dialog";

let yeomanImage = require("../images/yeoman.png");

class AppComponent extends React.Component {

  // 构造函数 定义数据
  constructor() {
    super();
    this.state = {
      name: 'project branch name is master !'
    }
  }

  render() {
    // this.createDom();
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">
          Please edit <code>src/components/Main.js</code> to get started!
        </div>
        <div className="one"> 我是一个父级 div 哈 ！！！</div>

        {/* 父组件传值到子组件  */}
        {/* <Home name={this.state.name}></Home> */}

        {/* 列表循环 */}
        <Arrlist></Arrlist>

        {/* 弹窗组件 */}
        {/* <Dialog></Dialog> */}
      </div>
    );
  }

  createDom() {
    return React.createElement(
      "div",
      { className: "shopping-list" },
      React.createElement("h1" /* ... h1 children ... */),
      React.createElement("ul" /* ... ul children ... */)
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
