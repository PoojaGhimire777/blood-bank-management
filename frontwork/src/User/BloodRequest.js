import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import UserService from '../services/UserService';
class BloodRequest extends Component{
  constructor(props) {
    super(props)

    this.state = {
        userName: '',
        contactNumber: '',
        address: '',
        bloodGroup: '',
        emailId:'',
        fields: {},
        errors: {},
        BarStyling3: {background:"#BF222B", color:"white",padding:"0.5rem" }
        }
        this.changeuserNameHandler = this.changeuserNameHandler.bind(this);
        this.changecontactNumberHandler = this.changecontactNumberHandler.bind(this);
        this.changeaddressHandler = this.changeaddressHandler.bind(this);
        this.changebloodGroupHandler = this.changebloodGroupHandler.bind(this);
        this.changeemailIdHandler = this.changeemailIdHandler.bind(this);

}
raiseRequest = (e) => {
    e.preventDefault();
    let 
        user = {userName: this.state.userName, 
        contactNumber: this.state.contactNumber,
        address: this.state.address, 
        bloodGroup: this.state.bloodGroup,
        emailId: this.state.emailId
    };

        console.log('user => ' + JSON.stringify(user));
       
        UserService.bloodRequest(user).then(res =>{
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
changebloodGroupHandler=(event) =>{
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
changeemailIdHandler=(event) =>{
  this.setState({emailId: event.target.value})
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
render(){
    return(
        <div className="base-container" ref={this.props.containerRef}>
        <div>
        <ul className="header">
        <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink exact to="/User">Home</NavLink></button></li>
        <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/RegisterNewDonor">Donor Registeration</NavLink></button></li>
        <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/UserSearch">Search</NavLink></button></li>
        <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/UserStock">Blood Stock</NavLink></button></li>
        <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/RequestBlood">Request Blood</NavLink></button></li>
        <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/exit">LogOut</NavLink></button></li>
      </ul>
        </div>
        <div className = "container">
            <div class="div divtable accordion " style={this.state.BarStyling3 } >
                <div class="tr" align="center">
                    <b><i class="fas fa-hand-holding-water" aria-hidden="true">Blood Request</i> </b>
                </div>
            </div>
        </div>
        <br></br>
        <div className = "row">
            <div className = "card col-md-6 offset-md-3 offset-md-3">
                <h2 className="text-center">Blood Request</h2>
                    <div className="card-body">
                        <form>
                            <div className = "form-group">
                                <label> Name: </label>
                                    <input placeholder="User Name" name="userName" className="form-control" 
                                       value={this.state.userName} onChange={this.changeuserNameHandler}/>
                                            {this.state.userNameError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                            </div>
                            <div className = "form-group">
                                <label> Contact Number: </label>
                                    <input placeholder="Contact Number" name="contactNumber" className="form-control" 
                                        value={this.state.contactNumber} onChange={this.changecontactNumberHandler}/>
                                         {this.state.contactNumberError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                            </div>
                            <div className = "form-group">
                                <label> Address: </label>
                                    <input placeholder="Address" name="address" className="form-control" 
                                        value={this.state.address} onChange={this.changeaddressHandler}/>
                                         {this.state.addressError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                            </div>
                            <div className = "form-group">
                                <label> Blood Group: </label>
                                    <input placeholder="Blood Group" name="bloodGroup" className="form-control" 
                                        value={this.state.bloodGroup} onChange={this.changebloodGroupHandler}/>
                                         {this.state.bloodGroupError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                            </div>
                            <div className = "form-group">
                                <label> Email Id: </label>
                                    <input placeholder="Email Id" name="emailId" className="form-control" 
                                        value={this.state.emailId} onChange={this.changeemailIdHandler}/>
                                         {this.state.emailIdError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
                            </div>
                            <div className="text-center">
                            <button className="btn btn-success " onClick={this.raiseRequest}>Raise Request</button>
                            </div> 
                            </form>
                            </div>
                            </div>
                            </div>
                            </div>
    )
}
}
export default BloodRequest