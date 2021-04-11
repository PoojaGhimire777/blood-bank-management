import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class IncreaseStock extends Component {
  constructor(props) {
    super(props)

    this.state = {
        
        BloodGroup:''
    }
  }
  saveOrUpdateBloodStock = (e) => {
    e.preventDefault();
    let 
        donor = {BloodGroup: this.state.BloodGroup
        };
        console.log('donor => ' + JSON.stringify(donor));
        // LoginService.UpdateStock(BloodGroup,).then(res =>{
        //     this.props.history.push('/updateStock');
        // });
}
changeBloodGroupHandler= (event) => {
  this.setState({BloodGroup: event.target.value});
}
handleChange= (event) => {
  this.setState({BloodGroup: event.target.value});
}


render() {
  return (<div>
    <ul className="header"> 
    
    <li><NavLink exact to="/Donor">Donor</NavLink></li>
    <li><NavLink to ="/search">Search Donor</NavLink></li>
    <li><NavLink to ="/Stock">Stock</NavLink></li>
    <li><NavLink to ="/exit">LogOut</NavLink></li>
    </ul>
      <div className = "container">
          <div className = "row">
              <div className = "card col-md-4 offset-md-4 offset-md-3">
                <div>
                  <h3 className="text-center">Increase Stock</h3>
                  <button className="btn btn-success btn-lg float-right" onClick={this.saveOrUpdateBloodStock}>Update</button>
                  </div>
                  <div className="card-body">
                      <form>
                      <div className = "form-group">
                      <div>
                            <label> Blood Group: </label>
                            </div>
                            {/* <br></br> */}
                            <div>
                              <select role={this.state.BloodGroup} onChange={this.handleChange} >
                                        <option BloodGroup="A+" >A+ </option>  
                                        <option BloodGroup="B+"> B+ </option>  
                                        <option BloodGroup="AB+"> AB+ </option>
                                        <option BloodGroup="O+"> O+ </option>
                                        <option BloodGroup="A-"> A- </option>
                                        <option BloodGroup="B-"> B- </option>
                                        <option BloodGroup="AB-"> AB- </option>  
                                        <option BloodGroup="O-"> O- </option>
                                        </select>
                                        <br></br>
                                        {/* <br></br> */}
                                        <div>
                                        <label>Units: </label>
                                        </div>
                                       
                                        <input placeholder="Units" BloodGroup="BloodGroup" className="form-control" 
                                        value={this.state.BloodGroup} onChange={this.changeBloodGroupHandler}/>
                                        <br></br>
                                        </div>
                      </div>
                      </form>
                             </div>
                </div>
                </div>   
            

                    </div>
             </div>)

      }
}
export default IncreaseStock