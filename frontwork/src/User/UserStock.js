import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import UserService from '../services/UserService'

class UserStock extends Component{
    constructor(props){
        super(props)
        this.state={
            bloodStock: []
        }
        
    }
   
    
    componentDidMount(){
         UserService.getAllStockByUser().then((res) => {
             this.setState({ bloodStock:res.data});
         });
     }
    render(){
        return(
            <div>
                
        <ul className="header">
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink exact to="/User">Home</NavLink></button></li>
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/RegisterNewDonor">Donor Registeration</NavLink></button></li>
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/UserSearch">Search</NavLink></button></li>
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/UserStock">Blood Stock</NavLink></button></li>
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/RequestBlood">Request Blood</NavLink></button></li>
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/exit">LogOut</NavLink></button></li>
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
export default UserStock