import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import allDonor from "./allDonor";
import CreateDonor from "./CreateDonor";
import UpdateDonor from "./UpdateDonor";
  
class Donor extends Component{
    constructor(props) {
        super(props)

        this.state = {
                Donor: []
        }
        this.addDonor = this.addDonor.bind(this);
        this.listalldonor = this.listalldonor.bind(this);
        this.updatealldonor = this.updatealldonor.bind(this);
    }
    addDonor(){
        this.props.history.push('/addDonor');
    }
    listalldonor(){
        this.props.history.push('/allDonor');
    }
    updatealldonor(){
        this.props.history.push('/updateDonor');
    }

    render() {
        return (

                <HashRouter>
                <div>
                <h2>Here you can perform all crud operations</h2>
                
                <br></br>
                <div>
                <button className="btn btn-primary" onClick={this.addDonor}> Add Donor</button>
                <button className="btn btn-primary" onClick={this.listalldonor}> All Donor</button>
                <button className="btn btn-primary" onClick={this.updatealldonor}> Update Donor List</button>

                {/* <button><NavLink exact to="CreateDonor">Create Donor</NavLink></button>
                <button><NavLink to ="AllDonor">All Donors</NavLink></button>
                <button><NavLink to ="UpdateDonor">Update Donor List</NavLink></button> */}
                <div>
                <Route path="/allDonor" component={allDonor}/>
                <Route path="/updateDonor" component={UpdateDonor}/>
                <Route path="/addDonor" component={CreateDonor}/>
                </div>
                </div>
                </div>
                </HashRouter>
        );
    }
}
export default Donor