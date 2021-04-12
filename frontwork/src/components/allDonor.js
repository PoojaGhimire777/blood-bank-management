import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import AdminService from '../services/AdminService';

class allDonor extends Component{
    constructor(props){
        super(props)
        this.state={
            donor: []
        }

        this.addDonor = this.addDonor.bind(this);
        this.editDonor = this.editDonor.bind(this);
        this.deleteDonor=this.deleteDonor.bind(this);
    }
    addDonor(){
        this.props.history.push('/addDonor/_add');
    }
    editDonor(id){
     this.props.history.push(`/updateDonor/${id}`);
     }
     deleteDonor(id){
        AdminService.deleteDonor(id).then( res => {
            this.setState({donor: this.state.donor.filter(donor => donor.id !== id)});
        });
    }
    componentDidMount(){
         AdminService.getallDonor().then((res) => {
             this.setState({ donor:res.data});
         });
     }
    render(){
        return(
            <div>
                
                <ul className="header"> 
                <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink exact to="/Donor">Donor</NavLink></button></li>
                <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/search">Search Donor</NavLink></button></li>
                <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/Stock">Stock</NavLink></button></li>
                <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/showrequest">Show Requests</NavLink></button></li>
                <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/exit">LogOut</NavLink></button></li>
                </ul>
             <div>  


            <div className = "container">
            <div className = "row">
                <div className = "card col-md-12 offset-md- offset-md-">
                    <h2 className="text-center">Donor List</h2>
                    <div className="card-body" style={{overflow: "auto" }}>
                        <div className="row">
                        <table className="table table-striped table-borderd">
                            <thead className="text-center" style={{background:"GREY"}} >
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
                                    <th>Actions</th>
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
                                            <td>
                                                <button onClick={ () => this.editDonor(donor.id)} className="btn btn-info">Update </button>
                                                <button style={{marginLeft: "2px"}} onClick={ () => this.deleteDonor(donor.id)} className="btn btn-danger">Delete </button> 
                                            </td>
                                        </tr>
                                    )
                                    }
                            </tbody>
                        </table>
                        {/* card body */}
                    </div>
                </div>
                </div>
                </div>
                </div>
                {/* card body */}
            </div>                   
        </div>
        )
    }
}
export default allDonor