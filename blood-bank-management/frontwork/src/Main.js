import React, { Component } from "react";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import LoginComponent from "./components/LoginComponent";
import CreateDonor from "./components/CreateDonor";
import Donor from "./components/Donor";
import StockHome from "./components/StockHome";
import allDonor from "./components/allDonor";
import UpdateDonor from "./components/UpdateDonor";
import {
  Route,
  HashRouter
} from "react-router-dom";
import IncreaseStock from "./components/IncreaseStock";
import DecreaseStock from "./components/DecreaseStock";
import AllStock from "./components/AllStock";
import SearchDonor from "./components/SearchDonor";


 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>ONLINE BLOOD DONATION MANAGEMENT SYSTEM</h1>
            <div className="content">
             
                    <Route exact path="/" component={Home}/>
                    <Route path="/stuff" component={Stuff}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/Login" component={LoginComponent}/>
                    <Route path="/adddonor" component={CreateDonor}/>
                    <Route path="/Donor" component={Donor}/>
                    <Route path="/search" component={SearchDonor}/>
                    <Route path="/Stock" component={StockHome}/>
                    <Route path="/exit" component={Home}/>
                    <Route path="/allDonor" component={allDonor}/>
                    <Route path="/updateDonor/:id" component={UpdateDonor}/>
                    <Route path="/increaseStock" component={IncreaseStock}/>
                    <Route path="/decreaseStock" component={DecreaseStock}/>
                    <Route path="/allStock" component={AllStock}/>

              {/* </switch> */}
            </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;