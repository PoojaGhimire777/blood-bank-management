import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
class SearchDonor extends Component{
  constructor(props) {
    super(props)

    this.state = {
        
        BloodGroup:'',
        BarStyling: {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.3rem"},
        BarStyling2: {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.3rem"},
        keyword:'',
        setKeyword:''
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
          <li><NavLink to ="/exit">Logout</NavLink></li>

         </ul> 
         <div className = "container">
            <div className = "row">
                <div className = "card col-md-4 offset-md-4 offset-md-3">
                    <h2 className="text-center">Search Donor</h2>
                            <div className="card-body" >
                          <div className="text-center">
                            <div>
                              <select BloodGroup={this.state.BloodGroup} style={this.state.BarStyling2} onChange={this.handleChange} >
                            
                                        <option BloodGroup="--" >Select Blood Group </option>  
                                        <option BloodGroup="A+" >A+ </option>  
                                        <option BloodGroup="B+"> B+ </option>  
                                        <option BloodGroup="AB+"> AB+ </option>
                                        <option BloodGroup="O+"> O+ </option>
                                        <option BloodGroup="A-"> A- </option>
                                        <option BloodGroup="B-"> B- </option>
                                        <option BloodGroup="AB-"> AB- </option>  
                                        <option BloodGroup="O-"> O- </option>
                                        </select>
                                        </div>
                                        <br></br>
                                        <div>
                              <input  style={this.state.BarStyling}
                              key="random1" value={this.state.keyword} placeholder={"Enter Location/City"} onChange={(e) => this.state.setKeyword(e.target.value)}/>
                              </div>
                              <br></br>
                              <div>
                                    <button className="btn btn-success btn-lg float-center"/*onClick={this.saveOrUpdateBloodStock*/ >Search</button>
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
export default SearchDonor



