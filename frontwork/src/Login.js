import React, { Component } from "react";


 class Login extends Component {
    
    
    render() {
        return (
        <div className="base-container" ref={this.props.containerRef}>
        <div className="header">LogIn As: </div>
        <select id = "myList" onchange = "favTutorial()" >  
<option> ---SELECT ONE--- </option>  
<option> ADMIN </option>  
<option> USER </option>  
 
</select> 
        <div className="content">
          
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username: </label>
              <input type="text" name="username" placeholder="Username" />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
    }
}
export default Login;