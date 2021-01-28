require("./home.css");

import React from "react";

// 静态常量 使用
// const name = "Josh Perez";

// study link: https://react.docschina.org/docs/introducing-jsx.html
class HomeComponent extends React.Component {
  // 在构造函数中 初始化 变量
  constructor(props) {
    // 继承
    super(props);
    // 定义静态数据变量
    this.state = {
      users: {
        firstName: "Harper",
        lastName: "Perez"
      },
      class: "children-one", // 属性绑定语法
      date: new Date(),
      isLoggedIn: false
    };
  }

  // 定义 名字拼接 方法
  formatName(user) {
    return user.firstName + " + " + user.lastName;
  }

  // 创建时钟
  createTime() {
    return <span> {this.state.date.toLocaleTimeString()} </span>;
  }

  // demo  函数式组件
  Clock(props) {
    return <div>函数式组件 {props.date.toLocaleTimeString()}</div>;
  }
  // 更新  this.state 数据
  tick() {
    // 普通  更新
    this.setState({
      date: new Date()
    });

    // 或者是  函数式
    // this.setState((state, props) => ({
    //   counter: state.counter + props.increment
    // }));
  }

  // 绑定 回调方法 https://react.docschina.org/docs/handling-events.html
  handleClick(ev) {
    console.log('ev = ', ev);
    
    /**
     * 这里想设置布尔值  取反  注释的这两行代码有报错 ？？？
     */
    // this.state.isLoggedIn ?  this.setState({isLoggedIn: false}):  this.setState({isLoggedIn: true});
    // this.setState({isLoggedIn: !this.state.isLoggedIn})

    window.alert("这是输入的数据！");
  }

  // 声明周期  - 挂载
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);

    console.log("mount props = ", JSON.stringify(this.props));
  }
  // 声明周期  - 销毁
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // 渲染函数 调用 渲染页面内容
  render() {
    return (
      <div className="home">
        {/* 属性绑定语法 */}
        <div className={this.state.class} tabIndex="0">
          我是一个 子级 div 哈 ！！！名字叫做:{" "}
          {this.formatName(this.state.users)}, It is {this.createTime()}
          <p className="props-content" onClick={this.handleClick}>
            props : {this.props.name} + {this.props.propsName} 是 {this.state.isLoggedIn}
          </p>
        </div>
      </div>
    );
  }
}

HomeComponent.defaultProps = {
  // 那这里的输入是干啥的 ？？ 默认输入？？
  propsName: "project name is test !"
};
export default HomeComponent;
