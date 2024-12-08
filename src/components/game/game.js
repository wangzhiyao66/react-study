import React from 'react'

import './game.css'

export default class GameComponent extends React.Component {
    constructor() {
        super();
        this.state = { count: 1 }
    }

    // 声明周期  - 挂载
    componentDidMount() {
        console.log("Demo props", this.props);
    }
    // 声明周期  - 销毁
    componentWillUnmount() { }

    // 渲染函数
    render() {
        return <div class="GameDemo">Game</div>;
    }

}
