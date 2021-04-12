import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import axios from 'axios'

 import LoginService  from "../services/LoginService";


 class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            role: '',
            password: '',
            emailId: '',
            contactNumber: '',
            fields: {},
            errors: {},
            BarStyling3: {background:"#BF222B", color:"white",padding:"0.5rem" }

        }
        this.changeuserNameHandler = this.changeuserNameHandler.bind(this);
        this.changeroleHandler = this.changeroleHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.changeemailIdHandler = this.changeemailIdHandler.bind(this);
        this.changecontactNumberHandler = this.changecontactNumberHandler.bind(this);
        this.saveOrUpdatesignUp = this.saveOrUpdatesignUp.bind(this);

        
    }
    saveOrUpdatesignUp = (e) => {
        e.preventDefault();
        let 
            user = {userName: this.state.userName, 
            role: this.state.role, 
            password: this.state.password,
            emailId: this.state.emailId,
            contactNumber: this.state.contactNumber};

            console.log('user => ' + JSON.stringify(user));
           
            LoginService.createUser(user).then(res =>{
            this.props.history.push('/Login');
          });
            
            
    }
    changeuserNameHandler= (event) => {
        this.setState({userName: event.target.value});
        if(event.target.name==='userName'){
            if(event.target.value==='' || event.target.value===null  ){
              this.setState({
                userNameError:true
              })
            } 
           
            else {
              this.setState({
                userNameError:false,     
                userName:event.target.value
              })
            }
          }
    }
    changeroleHandler= (event) => {
        this.setState({role: event.target.value});
        if(event.target.name==='role'){
            if(event.target.value==='' || event.target.value===null  ){
              this.setState({
                roleError:true
              })
            } 
           
            else {
              this.setState({
                roleError:false,     
                role:event.target.value
              })
            }
          }
    }
    changepasswordHandler= (event) => {
        this.setState({password: event.target.value});
        if(event.target.name==='password'){
            if(event.target.value==='' || event.target.value===null  ){
              this.setState({
                passwordError:true
              })
            } 
           
            else {
              this.setState({
                passwordError:false,     
                password:event.target.value
              })
            }
          }
    }

    changeemailIdHandler= (event) => {
        this.setState({emailId: event.target.value});
        if(event.target.name==='emailId'){
            if(event.target.value==='' || event.target.value===null  ){
              this.setState({
                emailIdError:true
              })
            } 
           
            else {
              this.setState({
                emailIdError:false,     
                emailId:event.target.value
              })
            }
          }
    }
    changecontactNumberHandler=(event) =>{
        this.setState({contactNumber: event.target.value})
        if(event.target.name==='contactNumber'){
            if(event.target.value==='' || event.target.value===null ){
              this.setState({
                contactNumberError:true
              })
            } else {
              this.setState({
                contactNumberError:false,     
                contactNumber:event.target.value
              })
            }
          }
    }
    render() { 
        return (
        <div className="base-container" ref={this.props.containerRef}>
            <div>
                <ul className="header">
                    <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink exact to="/">Home</NavLink></button></li>
                    <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/stuff">About</NavLink></button></li>
                    <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/contact">Contact</NavLink></button></li>
                    <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/Login">Login</NavLink></button></li>
                </ul> 
            </div>
            <div className = "container">
                <div class="div divtable accordion " style={this.state.BarStyling3 } >
                    <div class="tr" align="center">
                        <b><i class="fas fa-hand-holding-water" aria-hidden="true">SignUp</i> </b>
                    </div>
                </div>
            </div>
            <br></br>
            <div className = "row">
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">Register YourSelf/Create Account</h2>
                        <div className="card-body">
                            <form>
                                <div className = "form-group">
                                    <label> User Name: </label>
                                        <input placeholder="userName" name="userName" className="form-control" 
                                           value={this.state.userName} onChange={this.changeuserNameHandler}/>
                                                {this.state.userNameError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                                </div>
                                <div className = "form-group">
                                    <label> Role: </label>
                                        <input placeholder="role" name="role" className="form-control" 
                                            value={this.state.role} onChange={this.changeroleHandler}/>
                                             {this.state.roleError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                                </div>
                                <div className = "form-group">
                                    <label> Password: </label>
                                        <input placeholder="Password" name="password" className="form-control" 
                                            value={this.state.password} onChange={this.changepasswordHandler}/>
                                             {this.state.passwordError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                                </div>
                                
                                <div className = "form-group">
                                    <label> Email Id: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control" 
                                            value={this.state.emailId} onChange={this.changeemailIdHandler}/>
                                             {this.state.emailIdError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                                </div>
                                <div className = "form-group">
                                    <label> Contact Number: </label>
                                        <input placeholder="Contact Number" name="contactNumber" className="form-control" 
                                            value={this.state.contactNumber} onChange={this.changecontactNumberHandler}/>
                                             {this.state.contactNumberError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                                </div>
                                <button className="btn btn-success" onClick={this.saveOrUpdatesignUp}>Save</button>

                                </form>
                                </div>
                                </div>
                                </div>
                                </div>
                                
        
        )
    }



    
 }
 export default SignUp