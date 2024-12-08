import "./header.css";

import React from "react";
// import PropTypes from "prop-types";
// redux Link: https://github.com/reduxjs/redux
// react-redux
// 1. privader 组件使用。
export default class HeaderComponent extends React.Component {
    state = {};
    // 构造器 函数
    constructor(props) {
        super();
        this.state = {};
    }


    // 渲染函数
    render() {
        return <div class="HeaderDemo">
            <input type="text" onKeyUp={(e) => this.keyuohandler(e)} onChange={(e) => this.changesValue(e)} />
        </div>;
    }
    keyuohandler(event) {
        // console.log(event);
        let { keyCode, target } = event
        if (keyCode != 13) {
            return;
        }
        let content = target.value
        if (keyCode == 13 && content.trim() != '') {
            // alert('内容是' + content);
            console.log(content);

            this.props.addTodo(content);
        }
    }
    changesValue(event) {
        // console.log(event);
    }

    // 声明周期  - 挂载
    componentDidMount() {
        // console.log("Demo props", this.props);
    }

    // 声明周期  - 销毁
    componentWillUnmount() { }
}

// 定义数据 输入类型，直接使用 Typescript 不好吗？ 同 LINK:https://react.d\ocschina.org/docs/typechecking-with-proptypes.html
// HeaderComponent.propTypes = {
//     todo: PropTypes.array,
//     addTodo: PropTypes.func
// }

// HeaderComponent.defaultProps = {
//     // props
//     todo: [],
//     addTodo: () => { }
// };
