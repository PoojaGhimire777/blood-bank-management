import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
// import { baseUrl } from '../assets/js/helpers';

export default class logout extends Component {

  logout = () => {
    window.localStorage.clear();
    window.location.href = "http://localhost:3000" ;
  }
  
  render() {
    return (
    <div>
      <br></br>
      <ul className="header"> 
          
    <li><NavLink exact to="/Donor">Donor</NavLink></li>
    <li><NavLink to ="/search">Search Donor</NavLink></li>
    <li><NavLink to ="/Stock">Stock</NavLink></li>
    <li><NavLink to ="/DeleteDonor">Delete Donor</NavLink></li>
    <li><NavLink to ="/exit">Logout</NavLink></li>

   </ul> 
   <div style={{
                               display: "flex",
                               justifyContent: "center",
                               alignItems: "center"
                              }} >

      <button onClick={this.logout}>Logout</button>
      </div>
      </div>
    )
  }
}