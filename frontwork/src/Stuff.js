import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
class Stuff extends Component {
  render() {
    return (
      <div>
         <ul className="header">
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink exact to="/">Home</NavLink></button></li>
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/stuff">About</NavLink></button></li>
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/contact">Contact</NavLink></button></li>
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/Login">Login</NavLink></button></li>
        </ul> 
         
          <div className = "container">
            <div className = "row">
                <div className = "card col-md-12 offset-md- offset-md-"  >
                        <div className="card-body"  >
        <h2 >LOGIN(ADMIN/USER)</h2>
        <br></br>
        <p>Blood bank management system project is a web based project that is designed on JAVA SPRINGBOOT AND REACT-JS with database MYSQL. This project helps in managing various blood bank operations effectively. There are several features such as patient name, contacts, blood booking and requirements of blood group etc. This project also helps people find blood donors in times of need. There are two types of logins first one is admin and another one is user. Admin has full control of the system like add ,delete, manage add state, members and city. User can see request for blood and donate blood. This project is designed very simple and you can understand easily.</p>
        </div>
        </div>
        </div>
        </div>
       
        <div className = "container">
            <div className = "row">
                <div className = "card col-md-12 offset-md- offset-md-">
                        <div className="card-body" >
        <h2>Modules of blood bank project system</h2>
        <br></br>
        <ol>
          <li>Login/register: can login into system.</li>
          <li>Admin panel: he can see add , delete and update details.</li>
          <li>Request for blood: user can request here for blood.</li>
          <li>Donate blood: can donate blood</li>
          <li>Manage: manage members, city and add state.</li>
        </ol>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
 
export default Stuff;