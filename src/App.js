// import logo from './logo.svg';
import "./App.css";

import Sidebar from "./commonents/sidebar/sidebar";
import Home from "./commonents/home/home";
// import Home from './components/home/home'
import List from './list/list'
import React, { Component } from "react";
class App extends Component {
  // 构造器
  constructor() {
    super();
    this.state = {
      active: "", // 激活项
      menuData: [] // 菜单数据存贮
    };
  }

  // 主题页面
  render() {
    return (
      <div class="App">
        <div class="sidebar-box">
          <Sidebar itemActive={this.itemActive.bind(this)}></Sidebar>
        </div>
        <div class="content">
          <Home></Home>
          <List></List>
        </div>
      </div>
    );
  }

  itemActive(param) {
    console.log('param', param);
    this.setState({
      active: param
    });
  }
}

// function App() {
//   return (
//     <div class="App">
//       <div class="sidebar-box">
//         <Sidebar></Sidebar>
//       </div>
//       <div class="content">
//         <Home></Home>
//       </div>
//     </div>
//   );
// }

export default App;
