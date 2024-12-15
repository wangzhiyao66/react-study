import "./header.css";

import React from "react";
// redux Link: https://github.com/reduxjs/redux
// react-redux
// 1. privader 组件使用。
export default class HeaderComponent extends React.Component {
    state = {};
    // 构造器 函数
    constructor() {
        super();
        this.state = {};
    }
    // 渲染函数
    render() {
        return <div class="HeaderDemo">
            <input type="text" onKeyUp={(e) => this.keyuohandler(e)} />
        </div>;
    }

    keyuohandler(event) {
        let { keyCode, target } = event
        let content = target.value
        if (keyCode == 13 && content.trim() != '') {
            event.target.value = ''
            this.props.addTodo(content);
        }
    }

    // 声明周期  - 挂载
    componentDidMount() {
        // console.log("Demo props", this.props);
    }

    // 声明周期  - 销毁
    componentWillUnmount() { }
}
