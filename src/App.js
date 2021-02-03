// import logo from './logo.svg';
import "./App.css";

import Sidebar from "./commonents/sidebar/sidebar";
import Home from "./commonents/home/home";

function App() {
  return (
    <div className="App">
      <div className="sidebar-box">
        <Sidebar></Sidebar>
      </div>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
