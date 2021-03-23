import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


import Login from "../Login";
import CreateDonor from "../Component/CreateDonor";
import Donor from "../Component/Donor";
import Search from "../Component/Search";
import StockHome from "./StockHome";
import Logout from "./logout";
import allDonor from "./allDonor";
import UpdateDonor from "./UpdateDonor";

 
class Admin extends Component {
    
  render() {
 
    return (
        
        
      <HashRouter>
         
        <div>
          {/* <h1>ONLINE BLOOD DONATION MANAGEMENT SYSTEM</h1>*/}
          <ul className="header"> 
          
            <li><NavLink exact to="/Donor">Donor</NavLink></li>
            <li><NavLink to ="/search">Search Donor</NavLink></li>
            <li><NavLink to ="/Stock">Stock</NavLink></li>
            <li><NavLink to ="/DeleteDonor">Delete Donor</NavLink></li>
            <li><NavLink to ="/exit">Exit</NavLink></li>

           </ul> 
          {/* <div className="content">
          <Route exact path="/Donor" component={Donor}/>
            <Route path="/search" component={Search}/>
            <Route path="/Stock" component={StockHome}/>
            <Route path="/Login" component={Login}/>
            <Route path="/exit" component={Logout}/>
            <Route path="/allDonor" component={allDonor}/>
                <Route path="/updateDonor" component={UpdateDonor}/>
                <Route path="/addDonor" component={CreateDonor}/>
             
          </div> */}
        </div>
        </HashRouter>
    );
  }
}
 
export default Admin;