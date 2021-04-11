import React, { Component } from "react";
import {
    NavLink,
  } from "react-router-dom";
  class DeleteDonor extends Component{
    render() {
        return (
            <div>
                <br></br>
                <ul className="header"> 
          
          <li><NavLink exact to="/Donor">Donor</NavLink></li>
          <li><NavLink to ="/search">Search Donor</NavLink></li>
          <li><NavLink to ="/Stock">Stock</NavLink></li>
          <li><NavLink to ="/DeleteDonor">Delete Donor</NavLink></li>
          <li><NavLink to ="/exit">Exit</NavLink></li>

         </ul>
            </div>
        )
    }
  }
  export default DeleteDonor