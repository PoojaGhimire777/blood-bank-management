import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Login from "./Login";
import CreateDonor from "./Component/CreateDonor";
import Admin from "./Component/Admin";
import Donor from "./Component/Donor";
import Search from "./Component/Search";
import StockHome from "./Component/StockHome";
import allDonor from "./Component/allDonor";
import Logout from "./Component/logout";
import UpdateDonor from "./Component/UpdateDonor";

 
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
            <li><NavLink to="/Login">Login</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/Login" component={Login}/>
            <Route path="/adddonor" component={CreateDonor}/>
            <Route path="/admin" component={Admin}/>
            <Route exact path="/Donor" component={Donor}/>
            <Route path="/search" component={Search}/>
            <Route path="/Stock" component={StockHome}/>
            <Route path="/exit" component={Logout}/>
            <Route path="/allDonor" component={allDonor}/>
                <Route path="/updateDonor" component={UpdateDonor}/>
            
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;