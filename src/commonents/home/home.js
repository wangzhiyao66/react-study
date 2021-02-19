import "./home.css";

// Fragment  占位符  也来 React;
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  return <h2>topics</h2>;
}

export default class HomeComponent extends Component {
  state = {};
  // 构造器 函数
  constructor(props) {
    super();
    this.state = {};
  }

  // 声明周期  - 挂载
  componentDidMount() {
    console.log("Home props", this.props);
  }
  // 声明周期  - 销毁
  componentWillUnmount() {}

  // 渲染函数
  render() {
    return (
      <Fragment>
        {/* <div className="home-box">
          <label htmlFor="inset">请输入：</label>
          <input id='inset' type="text"></input>
        </div> */}
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/topics">
                <Topics />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </Fragment>
    );
  }
}
HomeComponent.defaultProps = {
  // props
  name: "Home",
};
