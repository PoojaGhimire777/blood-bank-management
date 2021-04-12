import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import "../index.css";
import UserService from '../services/UserService';

class RegisterNewDonor extends Component {
  constructor(props) {
    super(props)

    this.state = {
        firstName: '',
        lastName: '',
        emailId: '',
        dateOfBirth: '',
        gender: '',
        bloodGroup: '',
        contactNumber: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        fields: {},
        errors: {},
        BarStyling2: {width:"31rem", border:"none", padding:"0.5rem"},
        BarStyling3: {background:"#BF222B", color:"white",padding:"0.5rem" }

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
        dateOfBirth: this.state.dateOfBirth,
        gender: this.state.gender,
        bloodGroup: this.state.bloodGroup,
        contactNumber: this.state.contactNumber,
        address: this.state.address ,
        city: this.state.city,
        state: this.state.state,
        pincode:this.state.pincode};
        console.log('donor => ' + JSON.stringify(donor));
       
      //   AdminService.createDonor(donor).then(resp =>{
      //     console.log(resp.data);
      //     if(resp.status === 200){
      //       this.props.history.push('/Donor');
      //       alert("Donor Created");
      //     }
      //     else{
      //       alert("error");
      //     }
      //   // this.props.history.push('/Donor');
      // });
        if(this.state.firstName==='' || 
        this.state.lastName==='' ||
        this.state.emailId==='' || 
        this.state.gender==='' || 
        this.state.dateOfBirth==='' || 
        this.state.bloodGroup==='' || 
        this.state.contactNumber==='' || 
        this.state.address==='' || 
        this.state.city==='' || 
        this.state.state==='' || 
        this.state.pincode===''
        ){
          alert("Please provide all required options");
          return;
        }
        UserService.createDonorByUser(donor).then(resp =>{
              console.log(resp.data);
              // if(resp.status === 200){
                this.props.history.push('/Donor');
                alert("Donor Created");
              // }
              
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
        } 
        else if(!event.target.value.includes("@"&&".")){
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
changeDOBHandler=(event) =>{
    this.setState({dateOfBirth: event.target.value})
    if(event.target.name==='dateOfBirth'){
        if(event.target.value==='' || event.target.value===null ){
          this.setState({
            dateOfBirthError:true
          })
        } else {
          this.setState({
            dateOfBirthError:false,     
            dateOfBirth:event.target.value
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
      
      <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink exact to="/Donor">Donor</NavLink></button></li>
      <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/search">Search Donor</NavLink></button></li>
      <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/Stock">Stock</NavLink></button></li>
      <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/showrequest">Show Requests</NavLink></button></li>

      <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/exit">LogOut</NavLink></button></li>

     </ul>
    <div className = "container">
    <div class="div divtable accordion " style={this.state.BarStyling3 } >
      <div class="tr" align="center">
        <b><i class="fas fa-hand-holding-water" aria-hidden="true"></i> Online Donation Request</b>
      </div>
     </div>
     <br></br>
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
                                    <input  placeholder="Email Address" name="emailId" className="form-control"  
                                        value={this.state.emailId} onChange={this.changeEmailHandler} required/>
                                         {this.state.emailIdError ? <span style={{color: "red"}}>Please Enter Correct Email Id</span> : ''}

                            </div>
                            <div className = "form-group">
                                <label> DOB: </label>
                                <input  type="date" id="start" name="dateOfBirth"
                                             value="2018-07-22"
                                             min="1950-01-01" max="2030-12-31" className="form-control" 
                                             value={this.state.dateOfBirth} onChange={this.changeDOBHandler}></input>
                                 
                                   
                            </div>
                            
                            <div className = "form-group">
                                <label> BLOOD GROUP: </label>
                                <select bloodGroup={this.state.bloodGroup} className="form-control" onChange={this.changebloodgroupHandler} >
                        
                        <option value="" >Select Blood Group </option>  
                        <option value="A+" >A+ </option>  
                        <option value="B+"> B+ </option>  
                        <option value="AB+"> AB+ </option>
                        <option value="O+"> O+ </option>
                        <option value="A-"> A- </option>
                        <option value="B-"> B- </option>
                        <option value="AB-">AB-</option>  
                        <option value="O-"> O- </option>
                        </select>
                                    
                                         {this.state.bloodGroupError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                            </div>
                            <div className = "form-group">
                                <label> GENDER: </label>
                               
                                        <select gender={this.state.gender}  onChange={this.changegenderHandler} className="form-control" >
                                          <option value="" >Select Gender </option>  
                                          <option value="male" >Male </option>  
                                          <option value="female">Female </option>  
                                          </select>
                                         {this.state.genderError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                            </div>
                            <div className = "form-group">
                                <label> Contact Number: </label>
                                    <input  placeholder="Contact Number" name="contactNumber" className="form-control" 
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
                                <select name="donorState" class="form-control" tabindex="1" value={this.state.state} onChange={this.changestateHandler}>
                                          
                                        <option value="">Select State</option>
                                        <option value="Andaman Nicobar Islands">Andaman &amp; Nicobar Islands</option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Dadra Nagar Haveli">Dadra &amp; Nagar Haveli</option>
                                        <option value="Daman Diu ">Daman &amp; Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Ladakh">Ladakh</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Puducherry">Puducherry</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="West Bengal">West Bengal</option>
                                        </select>
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

export default RegisterNewDonor
