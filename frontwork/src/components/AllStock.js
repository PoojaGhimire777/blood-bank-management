import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import AdminService from '../services/AdminService';


class AllStock extends Component{
    constructor(props){
        super(props)
        this.state={
            bloodStock: []
        }
        
    }
   
    
    componentDidMount(){
         AdminService.getAllStock().then((res) => {
             this.setState({ bloodStock:res.data});
         });
     }
    render(){
        return(
            <div>
                 <br></br>
                    <ul className="header"> 
                        <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink exact to="/Donor">Donor</NavLink></button></li>
                        <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/search">Search Donor</NavLink></button></li>
                        <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/Stock">Stock</NavLink></button></li>
                        <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/showrequest">Show Requests</NavLink></button></li>
                         <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to ="/exit">Logout</NavLink></button></li>
                    </ul>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center">Blood Stock</h2>
                                <div className="card-body">
                                    <form>
                                        <div className = "form-group">
                                            <div>
                                                <div>   
                                                    <div className="row">
                                                        <table className="table table-striped table-borderd">
                                                            <thead>
                                                                <tr>
                                                                    <th>Id</th>
                                                                    <th> Blood Group</th>
                                                                    <th>units</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {this.state.bloodStock.map(
                                                                    bloodStock=>
                                                                    <tr key= {bloodStock.id}>
                                                                        <td>{bloodStock.id}</td>
                                                                        <td> {bloodStock.bloodgroup}</td>
                                                                        <td> {bloodStock.units}</td>
                                                                    </tr>
                                                                        )
                                                                    }
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
export default AllStock
