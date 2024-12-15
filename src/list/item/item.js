import "./item.css";

import React from "react";
import PropTypes from "prop-types";
// redux Link: https://github.com/reduxjs/redux
// react-redux

export default class ItemComponent extends React.Component {

    // 构造器 函数
    constructor() {
        super();
        // console.log("Item props", this.props);

    }
    // 声明周期  - 挂载
    componentDidMount() {
        // console.log("Item props", this.props);
    }
    // 声明周期  - 销毁
    componentWillUnmount() { }

    // 当props变化时
    // componentWillReceiveProps(nextProps) {
    // console.log('当props变化时', this.props);
    // }
    // 声明周期  - 更新
    componentDidUpdate() { }

    // 点击完成待办事项
    done(item) {
        let flag = !item.done;
        this.props.updataTodo(item.id, flag);
    }
    // input选中事件
    inputChanges(ev, id) {
        // console.log(ev, id);
        let flag = ev.target.checked;
        this.props.updataTodo(id, flag);
    }

    // 渲染函数
    render() {
        const tackItem = this.props.todo.map((el, index) => (
            <p key={index}>
                <label>
                    <input type="checkbox" checked={el.done} onChange={(e) => this.inputChanges(e, el.id)}></input>
                    <span> {el.trackName} </span>
                </label>
                {!el.done ? <span className="done" onClick={() => this.done(el)}>完成</span> : <span></span>}
            </p>
        ))
        return <div class="ItemDemo">
            {tackItem}
        </div>;
    }
}

// 定义数据 输入类型，直接使用 Typescript 不好吗？ 同 LINK:https://react.d\ocschina.org/docs/typechecking-with-proptypes.html
ItemComponent.propTypes = {
    name: PropTypes.string,
    todo: PropTypes.array
}

ItemComponent.defaultProps = {
    name: 'Item',
    todo: []
};
