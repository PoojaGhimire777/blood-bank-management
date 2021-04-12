import React, { Component } from "react";
import {
    NavLink,
    HashRouter
  } from "react-router-dom";
import AdminService from "../services/AdminService";

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
        AdminService.getallDonor().then(resp => {
            
             this.props.history.push('/allDonor');
             
            })
        }
           

            
    updatealldonor(){
        this.props.history.push('/updateDonor:id');
    }

    render() {
        return (

                <HashRouter>
                <div>
                 
                        <ul className="header"> 
                            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink exact to="/Donor">Donor</NavLink></button></li>
                            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/search">Search Donor</NavLink></button></li>
                            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/Stock">Stock</NavLink></button></li>
                            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/showrequest">Show Requests</NavLink></button></li>
                            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/exit">LogOut</NavLink></button></li>

                        </ul> 
                        <br></br>
                    <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <div className="card-body text-center" >
                                    <div>
                                        <button className="btn btn-success"  onClick={this.addDonor}> Add Donor</button>
                                        <button className="btn btn-success" style={{marginLeft: "10px"}}  onClick={this.listalldonor}> All Donor</button>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </HashRouter>
            );
    }
}
export default Donor