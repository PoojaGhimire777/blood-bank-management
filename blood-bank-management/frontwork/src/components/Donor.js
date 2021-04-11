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
            
            <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >

                <HashRouter>
                <div>
                <br></br>
                <ul className="header"> 
                    <li><NavLink exact to="/Donor">Donor</NavLink></li>
                    <li><NavLink to ="/search">Search Donor</NavLink></li>
                    <li><NavLink to ="/Stock">Stock</NavLink></li>
                    <li><NavLink to ="/exit">LogOut</NavLink></li>
                </ul> 
                {/* <h2>Here you can perform all crud operations</h2> */}
                <br></br>
                <div>
                <button onClick={this.addDonor}> Add Donor</button>
                <button style={{marginLeft: "10px"}}  onClick={this.listalldonor}> All Donor</button>
                {/* <button style={{marginLeft: "10px"}}  onClick={this.updatealldonor}> Update Donor List</button> */}
                </div>
                </div>
                </HashRouter>
                </div>
        );
    }
}
export default Donor