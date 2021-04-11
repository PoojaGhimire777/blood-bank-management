import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
class Stuff extends Component {
  render() {
    return (
      <div>
      <div>

         <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          
            <li><NavLink to="/stuff">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/Login">Login</NavLink></li>
          </ul> 
               <div>
               <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-7 offset-md-4 offset-md-3">
                                {/* <h2 className="text-center">Add Donor</h2> */}
                                    <div className="card-body">
          </div>
        <h2>About Us</h2>
        <h6>You Have the Power to Save a Life.</h6>
        <p>Immerse yourself in an interactive experience. 
          Explore and learn how to help yourself and help save others, every day.</p>
       
       <p>Each day, thousands of people – people just like you – 
provide compassionate care to those in need. Our network of generous
 donors, volunteers and employees share a mission of 
preventing and relieving suffering, here at home and around 

the world.

We roll up our sleeves and donate time, money and blood.

 We learn or teach life-saving skills so our communities can
 be better prepared when the need arises.</p>
       
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
 
export default Stuff;