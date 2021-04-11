import React, { Component } from "react";
import Stock from "./IncreaseStock";

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import allDonor from "./allDonor";

class StockHome extends Component{
    constructor(props) {
        super(props)

        this.state = {
                stock: []
        }
        this.increaseStock = this.increaseStock.bind(this);
        this.decreaseStock = this.decreaseStock.bind(this);
        this.allStock= this.allStock.bind(this);
       
    }
    increaseStock(){

        this.props.history.push('/increaseStock');
    }
    decreaseStock(){

        this.props.history.push('/decreaseStock');
    }
    allStock(){
        this.props.history.push('/allStock');

    }

    
        
    render() {
        return (
            <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <HashRouter>
            <div>
            <br></br>
            <ul className="header"> 
          
          <li><NavLink exact to="/Donor">Donor</NavLink></li>
          <li><NavLink to ="/search">Search Donor</NavLink></li>
          <li><NavLink to ="/Stock">Stock</NavLink></li>
          <li><NavLink to ="/exit">Logout</NavLink></li>
         </ul>   
         <button onClick={this.increaseStock}> Increase Stock</button>
         <button style={{marginLeft: "10px"}} onClick={this.decreaseStock}> Decrease Stock</button>
         <button style={{marginLeft: "10px"}} onClick={this.allStock}> All Stock</button>
            
                </div>
                </HashRouter>
                </div>
        );
    }
}
export default StockHome