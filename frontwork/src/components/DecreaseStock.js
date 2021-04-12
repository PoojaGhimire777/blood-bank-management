import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AdminService from "../services/AdminService";
class DecreaseStock extends Component {
  constructor(props) {
    super(props)

    this.state = {
        id: this.props.match.params.id,
        bloodGroup:'',
        units:null,

    }

         this.changeUnitsHandler = this.changeUnitsHandler.bind(this);
         this.handleBloodChange = this.handleBloodChange.bind(this);
         this.saveOrUpdateBloodStock = this.saveOrUpdateBloodStock.bind(this);

  }
//   componentDidMount(){
//     AdminService.increaseStock(this.state.bloodgroup).then( (res) =>{
//         let stock = res.data;
//         this.setState({units: stock.units,
//         });   
//     });
// }
  saveOrUpdateBloodStock() {
  
   
        AdminService.decreaseStock(this.state.units,this.state.bloodGroup).then(res =>{
          console.log('bloodgroup => ' + JSON.stringify(this.state.bloodGroup));

            this.props.history.push('/allStock');
        });
}
changeUnitsHandler= (event) => {
  this.setState({units: event.target.value});
}
handleBloodChange= (event) => {
  this.setState({bloodGroup: event.target.value});
}


render() {
  return (<div>
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
                <div>
                  <h2 className="text-center">Decrease Stock</h2>
                  <button className="btn btn-success btn-lg float-right" onClick={this.saveOrUpdateBloodStock}>Update</button>

                </div>

                <div className="card-body">

                      <form>
                      <div className = "form-group">
                        
                      <div>
                            <label> Blood Group: </label>
                            </div>
                            
                            <div>
                              
                              <select bloodGroup={this.state.bloodGroup} className="form-control" style={this.state.BarStyling2} onChange={this.handleBloodChange} >
                            
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
                                        <br></br>
                                      
                                        <div>
                                        <label>Units: </label>
                                        </div>
                                       
                                        <input placeholder="Units" name="units" className="form-control" 
                                        value={this.state.units} onChange={this.changeUnitsHandler}/>
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
export default DecreaseStock

// import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// class DecreaseStock extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
        
//         BloodGroup:''
//     }
//   }
//   decreaseBloodStock = (e) => {
//     e.preventDefault();
//     let 
//         donor = {BloodGroup: this.state.BloodGroup
//         };
//         console.log('donor => ' + JSON.stringify(donor));
//         // LoginService.UpdateStock(BloodGroup,).then(res =>{
//         //     this.props.history.push('/updateStock');
//         // });
// }
// changeBloodGroupHandler= (event) => {
//   this.setState({BloodGroup: event.target.value});
// }
// handleChange= (event) => {
//   this.setState({BloodGroup: event.target.value});
// }


// render() {
//   return (<div>
//     <ul className="header"> 
    
//     <li><NavLink exact to="/Donor">Donor</NavLink></li>
//     <li><NavLink to ="/search">Search Donor</NavLink></li>
//     <li><NavLink to ="/Stock">Stock</NavLink></li>
//     <li><NavLink to ="/exit">LogOut</NavLink></li>
//     </ul>
//       <div className = "container">
//           <div className = "row">
//               <div className = "card col-md-6 offset-md-3 offset-md-3">
//                 <div>
//                   <h2 className="text-center">Decrease Stock</h2>
//                   <button className="btn btn-success btn-lg float-right" onClick={this.decreaseBloodStock}>Update</button>
//                   </div>
//                   <div className="card-body">
//                       <form>
//                       <div className = "form-group">
//                       <div>
//                             <label> Blood Group: </label>
//                             </div>
//                             {/* <br></br> */}
//                             <div>
//                               <select role={this.state.BloodGroup} onChange={this.handleChange} >
//                                         <option BloodGroup="A+" >A+ </option>  
//                                         <option BloodGroup="B+"> B+ </option>  
//                                         <option BloodGroup="AB+"> AB+ </option>
//                                         <option BloodGroup="O+"> O+ </option>
//                                         <option BloodGroup="A-"> A- </option>
//                                         <option BloodGroup="B-"> B- </option>
//                                         <option BloodGroup="AB-"> AB- </option>  
//                                         <option BloodGroup="O-"> O- </option>
//                                         </select>
//                                         <br></br>
//                                         {/* <br></br> */}
//                                         <div>
//                                         <label>Units: </label>
//                                         </div>
                                       
                                         
//                                         <br></br>
//                                         </div>
//                       </div>
//                       </form>
//                              </div>
//                 </div>
//                 </div>   
            

//                     </div>
//              </div>)

//       }
// }
// export default DecreaseStock