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

    // 绑定 this , 不然无法使用 this 访问 HomeComponent 类。
    // this.handleClick = this.handleClick.bind(this);

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
    console.log('ev = ',this.state.isLoggedIn, ev);
    
    /**
     * 这里想设置布尔值  取反  是异步的.
     */
    // this.state.isLoggedIn ?  this.setState({isLoggedIn: false}):  this.setState({isLoggedIn: true});
    this.setState({isLoggedIn: !this.state.isLoggedIn})

    // 这里的  setState  是异步的，调用下面方法可以 验证
    // window.alert("这是输入的数据！" + this.state.isLoggedIn);
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
          {/* 箭头函数中传入参数，就可以获取事件对象了 */}
          <p className="props-content" onClick={(e)=>{this.handleClick(e)}}>
          {/* <p className="props-content" onClick={this.handleClick}> */}
            props : {this.props.name} + {this.props.propsName} 是 {this.state.isLoggedIn ? "true" : "false"}
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
