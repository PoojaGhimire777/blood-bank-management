import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import LoginComponent from "./components/LoginComponent";

 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>ONLINE BLOOD DONATION MANAGEMENT SYSTEM</h1>
          <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/LoginComponent">Login</NavLink></li>

          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/LoginComponent" component={LoginComponent}/>

             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;