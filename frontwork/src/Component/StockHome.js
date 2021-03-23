import React, { Component } from "react";
import Stock from "./Stock";

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import allDonor from "./allDonor";

class StockHome extends Component{
    
    
        
    render() {
        return (
            <HashRouter>
            <div className="header">
                <button><NavLink exact to="/allstock">Show Blood Stock</NavLink></button>
                <button><NavLink to ="/updateStock">Update Stock</NavLink></button>
                <div>
                <Route exact path="/allstock" component={Stock}/>
            <Route path="/updateStock" component={allDonor}/>
              
            </div>
                </div>
                </HashRouter>
        );
    }
}
export default StockHome