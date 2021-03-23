import React, { Component } from "react";
import axios from 'axios'
import LoginService  from '../services/LoginService';


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
  if(resp.status === 200){
    this.props.history.push('/welcome');
  }
  else{
     
  }
  // if(resp.data.obj.status === 1) {
  //   openFirstPage();
  // } else {
  //   errorMessage();
  // }
})

 
}
    render() {
      
        return (
        <div className="base-container" ref={this.props.containerRef}>
          
      
          <label>
        Login As:
          <select role={this.state.role} onChange={this.handleChange} >
              <option role="select" >SELECT ONE </option>  
              <option role="admin"> ADMIN </option>  
              <option role="user"> USER </option>  
              
           </select>
        </label>

        <div className="content">
            
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username: </label>
              <input type="text" name="username" placeholder="Username" 
              value={this.state.username} onChange={this.changeUserNameHandler}/>
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" placeholder="Password" 
              value={this.state.password} onChange={this.changePasswordHandler}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.loginClicked}>
            Login
          </button>
        </div>
        </div>
    );
    }
}
export default LoginComponent;