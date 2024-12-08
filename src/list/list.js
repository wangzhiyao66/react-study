import "./list.css";

import React from "react";
import PropTypes from "prop-types";
// redux Link: https://github.com/reduxjs/redux
// react-redux

// 组件
import Header from './header/header'
import Item from './item/item'
import Footer from './footer/footer'

// 教程视频看这里 https://haokan.baidu.com/v?vid=4795263438690554452&collection_id=9373858761570608306&
export default class ListComponent extends React.Component {

    // 初始化状态
    state = {

    };
    // 构造器 函数
    constructor(props) {
        super();
        this.state = {
            todos: [
                { id: 1, trackName: '吃饭', done: false },
                { id: 2, trackName: '睡觉', done: true },
                { id: 3, trackName: '打豆豆！', done: false }
            ]
        };
    }

    // 声明周期  - 挂载
    componentDidMount() {
        // console.log("Demo props", this.props);
    }
    // 声明周期  - 销毁
    componentWillUnmount() { }

    // 添加数据
    addTodo(value) {
        // console.log('参数', value);
        let obj = {
            id: this.state.todos.length + 1,
            trackName: value,
            done: false
        }
        let todos = this.state.todos
        todos.unshift(obj);
        this.setState({
            todo: todos
        })
    }
    // 更新数据
    updataTodo(id, flag) {
        let list = this.state.todos
        list.forEach(el => {
            el.id == id && (el.done = flag)
        });
        this.setState({
            todos: list
        })
    }
    // 全选或者是全不选
    selectAll(flag) {
        let list = this.state.todos
        list.forEach(el => {
            el.done = flag
        });
        this.setState({
            todos: list
        })
    }
    delect() {
        let list = this.state.todos;
        console.log('delect', list);

        let newlist = list.filter(el => {
            return el.done != true;
        })
        this.setState({
            todos: newlist
        })
    }
    // 渲染函数
    render() {
        const todo = this.state.todos;
        return <div class="ListDemo">
            <Header addTodo={this.addTodo.bind(this)}></Header>
            <Item todo={todo} updataTodo={this.updataTodo.bind(this)}></Item>
            <Footer selectAll={this.selectAll.bind(this)} delect={this.delect.bind(this)}></Footer>
        </div>;
    }
}

// 定义数据 输入类型，直接使用 Typescript 不好吗？ 同 LINK:https://react.d\ocschina.org/docs/typechecking-with-proptypes.html
ListComponent.propTypes = {
    name: PropTypes.string,
}

ListComponent.defaultProps = {
    // props
    name: "list"
};
