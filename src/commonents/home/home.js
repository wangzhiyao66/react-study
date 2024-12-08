import "./home.css";

// Fragment  占位符  也来 React;
import React, { Component, Fragment } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

// index 页面 模拟
function Index() {
  let { id } = useParams();

  return (
    <div>
      <h2>index ID: {id}</h2>
    </div>
  );
  // return <h2>index ID: {id}</h2>;
}
// Home 页面 模拟
function Home() {
  return <h2>Home</h2>;
}

// About 页面 模拟
function About() {
  return <h2>About</h2>;
}

function Topics() {
  // return <h2>topics</h2>;
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

export default class HomeComponent extends Component {
  state = {};
  data = '';
  // 构造器 函数
  constructor() {
    super();
    this.state = {};
  }

  // 声明周期  - 挂载
  componentDidMount() {
    console.log("Home props", this.props);
  }
  // 声明周期  - 销毁
  componentWillUnmount() { }

  // 渲染函数
  render() {
    return (
      <Fragment>
        {/* <div class="home-box">
          <label htmlFor="inset">请输入：</label>
          <input id='inset' type="text"></input>
        </div> */}
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">index</Link>
              </li>
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
              {/* 1 基本使用 */}
              <Route exact path="/">
                <Index />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              {/* 带嵌套路由的 */}
              <Route path="/topics">
                <Topics />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              {/* 2 带参数的 */}
              {/* <Route path="/:id" children={<Index />} /> */}
            </Switch>
          </div>
        </Router>
      </Fragment>
    );
  }
}
HomeComponent.defaultProps = {
  // props
  name: "Home"
};
