import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import AdminService from '../services/AdminService';
import AdminServices from '../services/AdminService';

class allDonor extends Component{
    constructor(props){
        super(props)
        this.state={
            donor: []
        }

        
        this.editDonor = this.editDonor.bind(this);
        this.deleteDonor=this.deleteDonor.bind(this);
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
                <br></br>
                <ul className="header"> 
                <li><NavLink exact to="/Donor">Donor</NavLink></li>
                <li><NavLink to ="/search">Search Donor</NavLink></li>
                <li><NavLink to ="/Stock">Stock</NavLink></li>
                <li><NavLink to ="/exit">Exit</NavLink></li>
                </ul>
             <div>   
                <h2 className="text-center"> Donor List</h2>
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
                                        <td> {donor.DOB}</td>
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
                                                 {/* <button style={{marginLeft: "5px"}} onClick={ () => this.viewDonor(donor.id)} className="btn btn-info">View </button> */}
                                        </td>
                                    </tr>
                                 )
                                }
                        </tbody>
                        
                    </table>
                </div>
            </div>
            </div>
        )
    }
}
export default allDonor