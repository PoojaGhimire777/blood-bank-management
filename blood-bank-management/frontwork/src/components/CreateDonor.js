import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import "../index.css";
import AdminService from '../services/AdminService';


class CreateDonor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
            DOB: '',
            gender: '',
            bloodGroup: '',
            contactNumber: '',
            address: '',
            city: '',
            state: '',
            pincode: '',
            fields: {},
            errors: {}

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateDonor = this.saveOrUpdateDonor.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeDOBHandler = this.changeDOBHandler.bind(this);
        this.changegenderHandler = this.changegenderHandler.bind(this);
        this.changebloodgroupHandler = this.changebloodgroupHandler.bind(this);
        this.changecontactNumberHandler = this.changecontactNumberHandler.bind(this);
        this.changeaddressHandler = this.changeaddressHandler.bind(this);
        this.changecityHandler = this.changecityHandler.bind(this);
        this.changestateHandler = this.changestateHandler.bind(this);
        this.changepincodeHandler = this.changepincodeHandler.bind(this);

        
    }
   
    saveOrUpdateDonor = (e) => {
        e.preventDefault();
        let 
            donor = {firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            emailId: this.state.emailId, 
            DOB: this.state.DOB,
            gender: this.state.gender,
            bloodGroup: this.state.bloodGroup,
            contactNumber: this.state.contactNumber,
            address: this.state.address ,
            city: this.state.city,
            state: this.state.state,
            pincode:this.state.pincode};
            console.log('donor => ' + JSON.stringify(donor));
            AdminService.createDonor(donor).then(res =>{
                
                this.props.history.push('/Donor');

            });
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
        if(event.target.name==='firstName'){
            if(event.target.value==='' || event.target.value===null  ){
              this.setState({
                firstNameError:true
              })
            } 
           
            else {
              this.setState({
                firstNameError:false,     
                firstName:event.target.value
              })
            }
          }
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
        if(event.target.name==='lastName'){
            if(event.target.value==='' || event.target.value===null ){
              this.setState({
                lastNameError:true
              })
            } else {
              this.setState({
                lastNameError:false,     
                lastName:event.target.value
              })
            }
          }
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
        if(event.target.name==='emailId'){
            if(event.target.value==='' || event.target.value===null ){
              this.setState({
                emailIdError:true
              })
            } else {
              this.setState({
                emailIdError:false,     
                emailId:event.target.value
              })
            }
          }
    }  
    changeDOBHandler=(event) =>{
        this.setState({DOB: event.target.value})
        if(event.target.name==='DOB'){
            if(event.target.value==='' || event.target.value===null ){
              this.setState({
                DOBError:true
              })
            } else {
              this.setState({
                DOBError:false,     
                DOB:event.target.value
              })
            }
          }
    }
    changegenderHandler=(event) =>{
        this.setState({gender: event.target.value})
        if(event.target.name==='gender'){
            if(event.target.value==='' || event.target.value===null ){
              this.setState({
                genderError:true
              })
            } else {
              this.setState({
                genderError:false,     
                gender:event.target.value
              })
            }
          }
    }
    changebloodgroupHandler=(event) =>{
        this.setState({bloodGroup: event.target.value})
        if(event.target.name==='bloodGroup'){
            if(event.target.value==='' || event.target.value===null ){
              this.setState({
                bloodGroupError:true
              })
            } else {
              this.setState({
                bloodGroupError:false,     
                bloodGroup:event.target.value
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
    changeaddressHandler=(event) =>{
        this.setState({address: event.target.value})
        if(event.target.name==='address'){
            if(event.target.value==='' || event.target.value===null ){
              this.setState({
                addressError:true
              })
            } else {
              this.setState({
                addressError:false,     
                address:event.target.value
              })
            }
          }
    }
    changecityHandler=(event) =>{
        this.setState({city: event.target.value})
        if(event.target.name==='city'){
            if(event.target.value==='' || event.target.value===null ){
              this.setState({
                cityError:true
              })
            } else {
              this.setState({
                cityError:false,     
                city:event.target.value
              })
            }
          }
    }
    changestateHandler=(event) =>{
        this.setState({state: event.target.value})
        if(event.target.name==='state'){
            if(event.target.value==='' || event.target.value===null ){
              this.setState({
                stateError:true
              })
            } else {
              this.setState({
                stateError:false,     
                state:event.target.value
              })
            }
          }
    }
    changepincodeHandler=(event) =>{
        this.setState({pincode: event.target.value})
        if(event.target.name==='pincode'){
            if(event.target.value==='' || event.target.value===null ){
              this.setState({
                pincodeError:true
              })
            } else {
              this.setState({
                pincodeError:false,     
                pincode:event.target.value
              })
            }
          }
    
    }
    
            
 render() { 
    return (
        <div>
            <br></br>
            <ul className="header"> 
          
          <li><NavLink exact to="/Donor">Donor</NavLink></li>
          <li><NavLink to ="/search">Search Donor</NavLink></li>
          <li><NavLink to ="/Stock">Stock</NavLink></li>
          <li><NavLink to ="/exit">Exit</NavLink></li>

         </ul>
            <br></br>
        <div className = "container">
            <div className = "row">
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">Add Donor</h2>
                        <div className="card-body">
                            <form>
                                <div className = "form-group">
                                    <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control" 
                                           value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                                {this.state.firstNameError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                                </div>
                                <div className = "form-group">
                                    <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" 
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                             {this.state.lastNameError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                                </div>
                                
                                <div className = "form-group">
                                    <label> Email Id: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control" 
                                            value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                             {this.state.emailIdError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                                </div>
                                <div className = "form-group">
                                    <label> DOB: </label>
                                     {/* <input type="date" id="start" name="DOB"
                                                 value="2018-07-22"
                                                 min="1950-01-01" max="2030-12-31" className="form-control" 
                                                 value={this.state.DOB} onChange={this.changeDOBHandler}></input>  */}
                                        <input placeholder="Date Of Birth" name="DOB" className="form-control" 
                                            value={this.state.DOB} onChange={this.changeDOBHandler}/>
                                             {this.state.DOBError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                                </div>
                                <div className = "form-group">
                                    <label> BLOOD GROUP: </label>
                                        <input placeholder="BLOOD GROUP" name="bloodGroup" className="form-control" 
                                            value={this.state.bloodGroup} onChange={this.changebloodgroupHandler}/>
                                             {this.state.bloodGroupError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                                </div>
                                <div className = "form-group">
                                    <label> GENDER: </label>
                                        <input placeholder="Gender" name="gender" className="form-control" 
                                            value={this.state.gender} onChange={this.changegenderHandler}/>
                                             {this.state.genderError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                                </div>
                                <div className = "form-group">
                                    <label> Contact Number: </label>
                                        <input placeholder="Contact Number" name="contactNumber" className="form-control" 
                                            value={this.state.contactNumber} onChange={this.changecontactNumberHandler}/>
                                             {this.state.contactNumberError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                                </div>
                                <div className = "form-group">
                                    <label> Address: </label>
                                        <input placeholder="Address" name="Address" className="form-control" 
                                            value={this.state.address} onChange={this.changeaddressHandler}/>
                                             {this.state.addressError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                                </div>
                                <div className = "form-group">
                                    <label> City: </label>
                                        <input placeholder="City" name="city" className="form-control" 
                                            value={this.state.city} onChange={this.changecityHandler}/>
                                             {this.state.cityError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                                </div>
                                <div className = "form-group">
                                    <label> State: </label>
                                        <input placeholder="State" name="state" className="form-control" 
                                            value={this.state.state} onChange={this.changestateHandler}/>
                                             {this.state.stateError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                                </div>
                                <div className = "form-group">
                                    <label> Pincode: </label>
                                        <input placeholder="Pincode" name="pincode" className="form-control" 
                                            value={this.state.pincode} onChange={this.changepincodeHandler}/>
                                             {this.state.pincodeError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                                </div>
                                <button className="btn btn-success" onClick={this.saveOrUpdateDonor}>Save</button>
                                <button className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</button>

                            </form>
                        </div>
                </div>
            </div>   
            

        </div>
        </div>
      )

     }
}

export default CreateDonor
