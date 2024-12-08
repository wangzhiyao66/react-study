import "./footer.css";

import React from "react";
import PropTypes from "prop-types";
// redux Link: https://github.com/reduxjs/redux
// react-redux
// 1. privader 组件使用。
export default class FooterComponent extends React.Component {
    state = {};
    // 构造器 函数
    constructor(props) {
        super();
        this.state = {};
    }

    // 声明周期  - 挂载
    componentDidMount() {
        // console.log("Demo props", this.props);
    }

    // 声明周期  - 销毁
    componentWillUnmount() { }

    // 触发全选和全不选
    inputChanges(ev) {
        let flag = ev.target.checked;
        this.props.selectAll(flag);
    }

    delect() {
        this.props.delect();
    }

    // 渲染函数
    render() {
        return <div class="FooterDemo">
            <div>
                <input type="checkbox" onChange={(e) => this.inputChanges(e)}></input>
                <span>已选2条/共5条</span>
                <button class='det-btn' onClick={() => this.delect()}>删除</button>
            </div>

        </div>;
    }
}

// 定义数据 输入类型，直接使用 Typescript 不好吗？ 同 LINK:https://react.d\ocschina.org/docs/typechecking-with-proptypes.html
// FooterComponent.propTypes = {
//     name: PropTypes.string
// }

// FooterComponent.defaultProps = {
//     // props
//     name: "Footer"
// };
