import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import AdminService from '../services/AdminService';
class Search extends Component{
  constructor(props) {
    super(props)

    this.state = {
        
        BarStyling: {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.3rem"},
        BarStyling2: {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.3rem"},
        Location:'',
        bloodGroup:'',
        fields: {},
        errors: {},
        donor: []
    }
    this.changeLocationHandlar = this.changeLocationHandlar.bind(this);
    this.handleBloodChange = this.handleBloodChange.bind(this)


  }

  SearchBloodDonor = (e) => {
    e.preventDefault();
        let 
            donor = {Location: this.state.Location, 
              bloodGroup: this.state.bloodGroup};
            console.log('donor => ' + JSON.stringify(donor));

            
            if(this.state.Location === ""  && this.state.bloodGroup === ""){
              alert("Please provide at least of the above options");
              return;
            }
            AdminService.searchDonor(this.state.Location, this.state.bloodGroup).then((res) => {
              this.setState({ donor:res.data});
            })
          }
  handleBloodChange= (event) => {
    this.setState({bloodGroup: event.target.value});
  }

  changeLocationHandlar= (event) => {
    this.setState({Location: event.target.value});
    if(event.target.name==='Location'){
      if(event.target.value==='' || event.target.value===null  ){
        this.setState({
          LocationError:true
        })
      } else {
        this.setState({
          LocationError:false,     
          Location:event.target.value
        })
      }
    }
    
}
  
render() {
  return (
      <div>
     
          <ul className="header"> 
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink exact to="/Donor">Donor</NavLink></button></li>
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/search">Search Donor</NavLink></button></li>
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/Stock">Stock</NavLink></button></li>
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/showrequest">Show Requests</NavLink></button></li>

            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/exit">LogOut</NavLink></button></li>
          </ul> 
              <div className = "container">
                <div className = "row">
                  <div className = "card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">Search Donor</h2>
                    <div className="card-body" >
                      <div className="text-center">
                        <div>
                        <select bloodGroup={this.state.bloodGroup} style={this.state.BarStyling2} onChange={this.handleBloodChange} >
                            
                            <option value="" >Select Blood Group </option>  
                            <option value="A%2B" >A+ </option>  
                            <option value="B%2B"> B+ </option>  
                            <option value="AB%2B"> AB+ </option>
                            <option value="O%2B"> O+ </option>
                            <option value="A%2D"> A- </option>
                            <option value="B%2D"> B- </option>
                            <option value="AB%2D"> AB- </option>  
                            <option value="O%2D"> O- </option>
                            </select>
                        </div>
                        <br></br>
                        <div>
                          <input style={this.state.BarStyling} placeholder={"Enter City"} name="Location" value={this.state.Location} onChange={this.changeLocationHandlar}/>
                          {this.state.LocationError ? <span style={{color: "red"}}>Please Enter some value</span> : ''} 
                        </div>
                        <br></br>
                        <div>
                          <button className="btn btn-success btn-lg float-center" onClick={this.SearchBloodDonor} >Search</button>
                        </div>
                      </div>
                    </div> 
                  </div>
                </div>
              </div>
            <div> 
              <br></br>  
            <div className = "container">
              <div className = "row">
                <div className = "card col-md-12 offset-md- offset-md-">
                  <div className="card-body" style={{overflow: "scroll"}}>
                  <h2 className="text-center"> Search Result</h2>
                    <br></br>
                    <div className="row">
                      <table className="table table-striped table-borderd">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th> First Name</th>
                            <th> Last Name</th>
                            <th> DOB</th>
                            <th> Gender</th>
                            <th> Blood Group</th>
                            <th> Email Id</th>
                            <th> Mob No:</th>
                            <th>Address</th>
                            <th> City</th>
                            <th> State</th>
                            <th> Pincode</th>
                          </tr>
                        </thead>
                        <tbody>
                            {
                              this.state.donor.map(
                                donor=>
                                 <tr key= {donor.id}>
                                    <td>{donor.id}</td>
                                    <td> {donor.firstName}</td>
                                    <td> {donor.lastName}</td>
                                    <td> {donor.dateOfBirth}</td>
                                    <td> {donor.gender}</td>
                                    <td> {donor.bloodGroup}</td>
                                    <td> {donor.emailId}</td>
                                    <td> {donor.contactNumber}</td>
                                    <td> {donor.address}</td>
                                    <td> {donor.city}</td>
                                    <td> {donor.state}</td>
                                    <td> {donor.pincode}</td>
                                  </tr>
                                 )
                            }
                        </tbody>
                      </table>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
);
}
}
export default Search



