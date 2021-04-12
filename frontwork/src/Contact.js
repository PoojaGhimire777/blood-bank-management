import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <div>
            <ul className="header">
              <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink exact to="/">Home</NavLink></button></li>
              <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/stuff">About</NavLink></button></li>
              <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/contact">Contact</NavLink></button></li>
              <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/Login">Login</NavLink></button></li>
            </ul> 
            <div className = "container">
            <div className = "row">
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body" >

        </div>
          <h2>GOT QUESTIONS?</h2>
          <br></br>
          <p>The easiest thing to do is to visit in
            our Hospital Or Contact us on our Phone No. #123456789
          </p>
          <br></br>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
  }
}
 
export default Contact;