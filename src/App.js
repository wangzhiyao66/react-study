// import logo from './logo.svg';
import "./App.css";

import Sidebar from "./commonents/sidebar/sidebar";
import Home from "./commonents/home/home";
import React, { Component } from "react";
class App extends Component {
  // 构造器
  constructor() {
    super();
    this.state = {
      active: "", // 激活项
      menuData: [], // 菜单数据存贮
    };
  }

  // 主题页面
  render() {
    return (
      <div className="App">
        <div className="sidebar-box">
          <Sidebar itemActive= {this.itemActive.bind(this)}></Sidebar>
        </div>
        <div className="content">
          <Home></Home>
        </div>
      </div>
    );
  }

  itemActive(param) {
    console.log('param', param);
    this.setState({
      active: param,
    });
  }
}

// function App() {
//   return (
//     <div className="App">
//       <div className="sidebar-box">
//         <Sidebar></Sidebar>
//       </div>
//       <div className="content">
//         <Home></Home>
//       </div>
//     </div>
//   );
// }

export default App;
