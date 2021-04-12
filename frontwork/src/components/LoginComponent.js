import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import axios from 'axios'

 import LoginService  from "../services/LoginService";


 class LoginComponent extends Component {
    
  constructor(props) {
    super(props)

    this.state = {
        id: this.props.match.params.id,
        username: '',
        password: '',
        role:'',
    }

    this.changeUserNameHandler = this.changeUserNameHandler.bind(this)
    this.changePasswordHandler = this.changePasswordHandler.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.loginClicked = this.loginClicked.bind(this)
    this.registerUser = this.registerUser.bind(this)

    
}

changeUserNameHandler= (event) => {
  this.setState({username: event.target.value});
}

changePasswordHandler= (event) => {
  this.setState({password: event.target.value});
}

handleChange= (event) => {
  this.setState({role: event.target.value});
}

loginClicked() {
LoginService.adminLogin(this.state.username,this.state.password,this.state.role).then(resp => {
  console.log(resp.data);
  if(resp.status === 200 && resp.data.role=== "admin"){
    this.props.history.push('/donor');
  }
  else if(resp.status === 200 && resp.data.role==="user" ){
    this.props.history.push('/user');

  }
  

}
)
}
registerUser(){
  this.props.history.push('/signUp');

}
    render() {
      
        return (
          
        <div className="base-container" ref={this.props.containerRef}>
            <ul className="header">
                <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink exact to="/">Home</NavLink></button></li>
                <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/stuff">About</NavLink></button></li>
                <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/contact">Contact</NavLink></button></li>
                <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/Login">Login</NavLink></button></li>
            </ul> 
            <div className = "container">
              <div className = "row">
                <div className = "card col-md-6 offset-md-3 offset-md-3 ">
                  <br></br>
                      <h2 >Login</h2>
                          <div className="card-body" >
                            <form>
                              <div className = "form-group">
                              
                                <label>Login As:</label>
                                <select role={this.state.role} className="form-control" onChange={this.handleChange} required >
                                    <option value="select" >Select One Option </option>  
                                    <option value="admin"> ADMIN </option>  
                                    <option value="user"> USER </option>  
                                </select>
                                </div>
                              
                                  <div className="form-group">
                                    <label htmlFor="username">Username : </label>
                                    <input type="text" name="username" placeholder="Username" className="form-control"
                                    value={this.state.username} onChange={this.changeUserNameHandler} required/>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="password">Password: </label>
                                    <input type="password" name="password" placeholdr="Password" className="form-control"
                                    value={this.state.password} onChange={this.changePasswordHandler} required/>
                                  </div>
                                
                              
                              <div className="footer text-center">
                                <button type="button" className="btn btn-success" onClick={this.loginClicked}>Login</button>
                                <button style={{marginLeft: "15px"}} type="button" className="btn btn-danger" onClick={this.registerUser}>Create Account</button>
                              </div>
                             
                              
                            </form>
                          </div>
                </div>
              </div>
            </div>
          </div>
        
    );
    }
}
export default   LoginComponent ;
