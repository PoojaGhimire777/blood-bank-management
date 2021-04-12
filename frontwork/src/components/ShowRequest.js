import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AdminService from '../services/AdminService';


class ShowRequest extends Component {
    constructor(props){
        super(props)
        this.state={
            userRequest: []
        }
        
    }
    componentDidMount(){
        AdminService.showRequest().then((res) => {
            this.setState({ userRequest:res.data});
        });
    }

    acceptRequest(id){
        let userRequest = { 
            status: 'APPROVED'
        };
            console.log('userRequest => ' + JSON.stringify(userRequest));
       
        AdminService.updateBloodRequest(userRequest, id).then( resp => {
            console.log(resp.data);
        if(resp.status === 200){
            this.props.history.push('/donor');
            alert("User Updated");
        }
        if (resp.status === 401){
            alert("error");
        }

            // this.props.history.push('/donor');
        });
    }

    rejectRequest(id){
        let userRequest = {//name: this.state.name, 
            status: 'REJECTED'
        };
            console.log('userRequest => ' + JSON.stringify(userRequest));
       
        AdminService.updateBloodRequest(userRequest, id).then( resp => {
            console.log(resp.data);
        if(resp.status === 200){
            this.props.history.push('/donor');
            alert("User Updated");
        }
        if (resp.status === 401){
            alert("error");
        }

            // this.props.history.push('/donor');
        });
    }
   
        render(){
            return (
            <div>
                <ul className="header"> 
                    <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink exact to="/Donor">Donor</NavLink></button></li>
                    <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/search">Search Donor</NavLink></button></li>
                    <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/Stock">Stock</NavLink></button></li>
                    <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/showrequest">Show Requests</NavLink></button></li>
                    <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/exit">Logout</NavLink></button></li>
                </ul>
                <div className = "container">
            <div className = "row">
                <div className = "card col-md-12 offset-md- offset-md-">
                    <h2 className="text-center">User Blood Requests</h2>
                        <div className="card-body" style={{overflow: "scroll" }}>
                            <form>
                                <div className = "form-group">
                                    <div>
                                        <div>   
                                            <div className="row">
                                                <table className="table table-striped table-borderd">
                                                    <thead>
                                                        <tr className="text-center">
                                                            <th>Id</th>
                                                            <th>Name</th>
                                                            <th> Contact No</th>
                                                            <th>Address</th>
                                                            <th>Blood Group</th>
                                                            <th>Email ID</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-center">
                                                        {this.state.userRequest.map(
                                                            userRequest=>
                                                            <tr key= {userRequest.id}>
                                                                <td>{userRequest.id}</td>
                                                                <td> {userRequest.name}</td>
                                                                <td> {userRequest.contactNumber}</td>
                                                                <td> {userRequest.address}</td>
                                                                <td> {userRequest.bloodGroup}</td>
                                                                <td> {userRequest.emailId}</td>
                                                                <td>
                                                                    <button onClick={() => this.acceptRequest(userRequest.id)} className="btn btn-info">Accept </button>
                                                                    <button style={{marginLeft: "10px"}} onClick={ () => this.rejectRequest(userRequest.id)} className="btn btn-danger">Reject</button> 
                                                                </td>
                                                           </tr>
                                                       )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
 }
}

export default ShowRequest