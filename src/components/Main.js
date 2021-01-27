require("normalize.css/normalize.css");
require("styles/App.css");

import React from "react";
import Home from './home/home'

let yeomanImage = require("../images/yeoman.png");

class AppComponent extends React.Component {
  render() {
    // this.createDom();
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">
          Please edit <code>src/components/Main.js</code> to get started!
        </div>
        <div className="one"> 我是一个div 哈 ！！！</div>
        <Home></Home>
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
