require("./home.css");

import React from "react";

// 静态常量 使用
// const name = "Josh Perez";

// study link: https://react.docschina.org/docs/introducing-jsx.html
class HomeComponent extends React.Component {

  // 定义静态数据变量
  state = {
    users: {
      firstName: "Harper",
      lastName: "Perez"
    },
    class: "children-one" // 属性绑定语法
  }

  // 定义 名字拼接 方法
  formatName(user) {
    return user.firstName + ' + ' + user.lastName;
  }

  // 创建时钟
  createTime() {
    return <span> {new Date().toLocaleTimeString()} </span>
  }

  // 每秒变更一次
  changTime() {
    setInterval(this.createTime(), 1000);
  }

  // demo  函数式组件
  Clock(props) {
    return (
      <div>
        函数式组件 {props.date.toLocaleTimeString()}
      </div>
    );
  }

  // 渲染函数 调用 渲染页面内容
  render() {
    return (
      <div className="home">
        {/* 属性绑定语法 */}
        <div className={this.state.class} tabIndex="0">
          我是一个 子级 div 哈 ！！！名字叫做: {this.formatName(this.state.users)}, It is {this.createTime()}
          <p>props : {this.props.name}</p>
        </div>

      </div>
    );
  }
}

HomeComponent.defaultProps = {
  props: {
    name: 'project name is test !'
  }
};
export default HomeComponent;
