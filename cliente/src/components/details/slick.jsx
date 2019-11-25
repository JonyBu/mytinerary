import React, { Component } from "react";
//import logo from "./logo.svg";
//import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";
 
const View1 = () => (
  <div style={{ height: 300, backgroundColor: "red" }}>Red</div>
);
const View2 = () => (
  <div style={{ height: 300, backgroundColor: "blue" }}>Blue</div>
);
const View3 = () => (
  <div style={{ height: 300, backgroundColor: "green" }}>Green</div>
);
const View4 = () => (
  <div style={{ height: 300, backgroundColor: "yellow" }}>Yellow</div>
);
 
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src='' className="App-logo" alt="logo" />
            <h2>Activities</h2>
          </div>
 
          <div>
            <Link to="/red">Red</Link> |<Link to="/blue">Blue</Link> |
            <Link to="/green">Green</Link> |<Link to="/yellow">Yellow</Link>
          </div>
 
          <SwipeableRoutes>
            <Route path="/red" component={View1} />
            <Route path="/blue" component={View2} />
            <Route path="/green" component={View3} />
            <Route path="/yellow" component={View4} />
          </SwipeableRoutes>
        </div>
      </Router>
    );
  }
}
 
export default App;