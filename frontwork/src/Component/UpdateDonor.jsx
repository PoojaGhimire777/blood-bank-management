import React, { Component } from 'react'
import "../index.css";

class UpdateDonor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            DOB: '',
            gender: '',
            bloodgroup: '',
            contactNumber: '',
            address: '',
            city: '',
            state: '',
            pincode: ''

        }
        // this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        // this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        // this.updateEmployee = this.updateEmployee.bind(this);
    }

    // componentDidMount(){
    //     EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
    //         let employee = res.data;
    //         this.setState({firstName: employee.firstName,
    //             lastName: employee.lastName,
    //             emailId : employee.emailId
    //         });
    //     });
    // }

    updateDonor = (e) => {
        e.preventDefault();
        let donor = {firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            emailId: this.state.emailId, 
            DOB: this.state.DOB,
            gender: this.state.gender,
            bloodgroup: this.state.bloodgroup,
            contactNumber: this.state.contactNumber,
            address: this.state.address ,
            city: this.state.city,
            state: this.state.state,
            pincode:this.state.pincode};
            console.log('donor => ' + JSON.stringify(donor));
        console.log('id => ' + JSON.stringify(this.state.id));
        // //EmployeeService.updateEmployee(donor, this.state.id).then( res => {
        //     this.props.history.push('/donor');
        // });
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }  
    changeDOBHandler=(event) =>{
        this.setState({DOB: event.target.value})
    }
    changeDOBHandler=(event) =>{
        this.setState({DOB: event.target.value})
    }
    changegenderHandler=(event) =>{
        this.setState({gender: event.target.value})
    }
    changebloodgroupHandler=(event) =>{
        this.setState({bloodgroup: event.target.value})
    }
    changecontactNumberHandler=(event) =>{
        this.setState({contactNumber: event.target.value})
    }
    changeaddressHandler=(event) =>{
        this.setState({address: event.target.value})
    }
    changecityHandler=(event) =>{
        this.setState({city: event.target.value})
    }
    changestateHandler=(event) =>{
        this.setState({state: event.target.value})
    }
    changepincodeHandler=(event) =>{
        this.setState({pincode: event.target.value})
    
    }

    cancel(){
        this.props.history.push('/donor');
    }

    render() {
        return (
            <div>
            <br></br>
        <div className = "container">
            <div className = "row">
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">Update Donor</h2>
                        <div className="card-body">
                            <form>
                                <div className = "form-group">
                                    <label> First Name: </label>
                                    <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" 
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                </div>
                                
                                <div className = "form-group">
                                    <label> Email Id: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control" 
                                            value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> DOB: </label>
                                        <input placeholder="Date Of Birth" name="DOB" className="form-control" 
                                            value={this.state.DOB} onChange={this.changeDOBHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> BLOOD GROUP: </label>
                                        <input placeholder="BLOOD GROUP" name="bloodgroup" className="form-control" 
                                            value={this.state.bloodgroup} onChange={this.changebloodgroupHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> GENDER: </label>
                                        <input placeholder="Gender" name="gender" className="form-control" 
                                            value={this.state.gender} onChange={this.changegenderHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Contact Number: </label>
                                        <input placeholder="Contact Number" name="contactNumber" className="form-control" 
                                            value={this.state.contactNumber} onChange={this.changecontactNumberHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Address: </label>
                                        <input placeholder="Address" name="Address" className="form-control" 
                                            value={this.state.address} onChange={this.changeaddressHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> City: </label>
                                        <input placeholder="City" name="city" className="form-control" 
                                            value={this.state.city} onChange={this.changecityHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> State: </label>
                                        <input placeholder="State" name="state" className="form-control" 
                                            value={this.state.state} onChange={this.changestateHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Pincode: </label>
                                        <input placeholder="Pincode" name="pincode" className="form-control" 
                                            value={this.state.pincode} onChange={this.changepincodeHandler}/>
                                </div>
                                <button className="btn btn-success" onClick={this.updateDonor}>Save</button>
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

export default UpdateDonor
