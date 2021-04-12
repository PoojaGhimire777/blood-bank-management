import React, { Component } from "react";

import {
    
    NavLink,
    HashRouter
  } from "react-router-dom";


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
            <HashRouter>
            <div>
               
                <ul className="header"> 
                    <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink exact to="/Donor">Donor</NavLink></button></li>
                    <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/search">Search Donor</NavLink></button></li>
                    <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/Stock">Stock</NavLink></button></li>
                    <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/showrequest">Show Requests</NavLink></button></li>

                    <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/exit">LogOut</NavLink></button></li>
                </ul>  
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <div className="card-body text-center">
                                <div>
                                <button className="btn btn-success" onClick={this.increaseStock}> Increase Stock</button>
                                <button className="btn btn-success" style={{marginLeft: "10px"}} onClick={this.decreaseStock}> Decrease Stock</button>
                                <button className="btn btn-success" style={{marginLeft: "10px"}} onClick={this.allStock}> All Stock</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </HashRouter>
        );
    }
}
export default StockHome