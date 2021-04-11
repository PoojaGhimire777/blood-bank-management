import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
class Contact extends Component {
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
                            <div className = "card col-md-7 offset-md-3 offset-md-3">
                                {/* <h2 className="text-center">Add Donor</h2> */}
                                    <div className="card-body">
        </div>
          <h3>Got Questions?</h3>
          <p>The easiest thing to do is to visit in
            our Hospital Or Contact us on our Phone No. #123456789
          </p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
  }
}
 
export default Contact;