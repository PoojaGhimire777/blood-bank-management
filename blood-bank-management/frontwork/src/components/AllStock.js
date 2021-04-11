import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'


class AllStock extends Component{
    constructor(props){
        super(props)
        this.state={
            bloodStock: []
        }
        
    }
   
    
    // componentDidMount(){
    //      LoginService.getallStock().then((res) => {
    //          this.setState({ bloodStock:res.data});
    //      });
    //  }
    render(){
        return(
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
                <div className = "card col-md-5 offset-md-4 offset-md-3">
                    <h3 className="text-center">Blood Stock</h3>
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