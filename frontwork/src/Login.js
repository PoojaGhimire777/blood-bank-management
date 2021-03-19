//import react from "react";
import React, { Component } from "react"
//import reactDom from "react-router-dom";
import styles from "./login.css";


class Login extends React.Component{

  constructor(props){
    super(props);
    this.state = { isLoginOpen: true, isRegisterOpen: false};
  
  }

  showLoginBox(){
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox(){
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }

  render(){
    
    return(
         <div classname="root-container">

          <div className="box-controller" >
            <div className={"controller " + (this.state.isLoginOpen
         ? "selected-controller"
         : "")} onClick= {this.showLoginBox.bind(this)}>
                Login
            </div>

            <div className ={"controller " + (this.state.isRegisterOpen
         ? "selected-controller"
         : "")} onClick= {this.showRegisterBox.bind(this)}>
              Register
              </div>
          </div>

            <div className="box-container"> 
            {this.state.isLoginOpen && <LoginBox/>}
            {this.state.isRegisterOpen && <RegisterBox/>}
            </div>
        
        </div>          
    );
  }
    

}


//Login Box
class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Login
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this
            .submitLogin
            .bind(this)}>Login</button>
        </div>
      </div>
    );
  }

}


//Register Box 
class RegisterBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: "",email: "",password: "", errors: [],
  pwdState: null,  };
  }

  //Add New Error Object to the array {elm: msg}
showValidationErr(elm, msg) {
  this.setState((prevState) => ({
    errors: [
      ...prevState.errors, {
        elm,
        msg
      }
    ]
  }));
}
//Remove a specific element from the array 
clearValidationErr(elm) {
  this.setState((prevState) => {
    let newArr = [];
    //Add all elements from the prev array to the new one that has a different element
    for (let err of prevState.errors) {
      if (elm != err.elm) {
        newArr.push(err);
      }
    }
    return {errors: newArr};
  });
}

//Update Username, password, and email on change event 
onUsernameChange(e) {
  this.setState({username: e.target.value});
  //We want to clear the error when ever the user type something new 
  this.clearValidationErr("username");
}

onEmailChange(e) {
  this.setState({email: e.target.value});
  this.clearValidationErr("email");
}

onPasswordChange(e) {
  this.setState({password: e.target.value});
  this.clearValidationErr("password");

  
  this.setState({ pwdState: "weak" });
  if(e.target.value.length > 8){
    this.setState({ pwdState: "medium" });
  } else if(e.target.value.length > 12){
    this.setState({ pwdState: "strong" });
  }
}

  submitRegister(e) {

    //Check for all input fields and show errors if empty (you can implement other cases!)
  if (this.state.username == "") {
     this.showValidationErr("username", "Username Cannot be empty!");
  }
  if (this.state.email == "") {
     this.showValidationErr("email", "Email Cannot be empty!");
  }
  if (this.state.password == "") {
     this.showValidationErr("password", "Password Cannot be empty!");
  }
  }

  render() {

   //NULL by default (help us check when rendering)
   let usernameErr = null,
   passwordErr = null,
   emailErr = null;
 //Loop and find which ones has the error
 for (let err of this.state.errors) {
   //Assign the validation error message 
   if (err.elm == "username") {
     usernameErr = err.msg;
   }
   if (err.elm == "password") {
     passwordErr = err.msg;
   }
   if (err.elm == "email") {
     emailErr = err.msg;
   }
   //No (else if or else) statements cause we need to check for all possible elements
 }
  
 let pwdWeak = false, pwdMedium = false, pwdStrong = false;

 //Weak password set onlt the pwdWeak to true, cause render only the first bar 
 if (this.state.pwdState == "weak") {
  pwdWeak = true;
} else if (this.state.pwdState == "medium") {
  //Medium pwd then render the weak and medium bars 
  pwdWeak = true;
  pwdMedium = true;
} else if (this.state.pwdState == "strong") {
  //Strong, render all the previoud bars 
  pwdWeak = true;
  pwdMedium = true;
  pwdStrong = true;
}
 
    return (
      <div className="inner-container">
        <div className="header">
          Register
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
              onChange={this.onUsernameChange.bind(this)}/>
                <small className="danger-error">{usernameErr ? usernameErr: ""}</small>

          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className="login-input" placeholder="Email"
            onChange={this.onEmailChange.bind(this)}/>
            <small className="danger-error">{emailErr? emailErr: ""}</small>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
              onChange={this.onPasswordChange.bind(this)}/>
              <small className="danger-error">{passwordErr? passwordErr: ""}</small>

   {this.state.password &&<div className="password-state">
               <div className={"pwd pwd-weak" + (pwdWeak ? "show" : "")}></div>
               <div className={"pwd pwd-medium" + (pwdMedium ? "show" : "")}></div>
               <div className={"pwd pwd-strong" + (pwdStrong ? "show" : "")}></div>
               </div> }

          </div>
    

          <button
            type="button"
            className="login-btn"
            onClick={this
            .submitRegister
            .bind(this)}>Register</button>
        </div>
      </div>
    );
  }
}







//reactDom.render(<Login /> , document.getElementById("root"));

export default Login;































































// import React, { Component } from "react";


//  class Login extends Component {
    
    
//     render() {
//         return (
//         <div className="base-container" ref={this.props.containerRef}>
//         <div className="header">LogIn As: </div>
//         <select id = "myList" onchange = "favTutorial()" >  
// <option> ---SELECT ONE--- </option>  
// <option> ADMIN </option>  
// <option> USER </option>  
 
// </select> 
//         <div className="content">
          
//           <div className="form">
//             <div className="form-group">
//               <label htmlFor="username">Username: </label>
//               <input type="text" name="username" placeholder="Username" />
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="password">Password: </label>
//               <input type="password" name="password" placeholder="Password" />
//             </div>
//           </div>
//         </div>
//         <div className="footer">
//           <button type="button" className="btn">
//             Login
//           </button>
//         </div>
//       </div>
//     );
//     }
// }
// export default Login;