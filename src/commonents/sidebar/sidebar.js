import "./sidebar.css";
import logo from "../../logo.svg";
import React from "react";

// 定义默认导出类
export default class SidebarComponent extends React.Component {
  state = {};
  // 构造器 函数
  constructor() {
    super();
    // this.changeMenu = this.changeMenu.bind(this);
    this.state = {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  }

  // 声明周期  - 挂载
  componentDidMount() {
    console.log("sidebar props", this.props);
  }
  // 声明周期  - 销毁
  componentWillUnmount() {}

  // 渲染函数
  render() {
    return (
      <div className="sidebar">
        {this.logo()}
        {this.menuList()}
      </div>
    );
  }

  // logo
  logo() {
    return (
      <div className="logo-box">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="side-title" onClick={this.changeMenu('111')}>React demo</p>
      </div>
    );
  }

  changeMenu(param){
    console.log('param', param);
  }

  // 列表
  menuList() {
    const numbers = this.state.list;
    const listItems = numbers.map((number,index) => (
      <li key={number.toString()} onClick={() => this.changeMenu(number)}> 菜单 {number} </li>
    ));
    return <ul className="menulist">{listItems}</ul>;
  }
}

SidebarComponent.defaultProps = {
  // props
  name: "Sidebar",
};
