import React, {Component} from 'react'

class allDonor extends Component{
    constructor(props){
        super(props)
        this.state={
            donors: []

        }
    }
    // componentDidMount(){
    //     DonorService.getDonors().then((res) => {
    //         this.setState({ donors: res.data});
    //     });
    // }
    render(){
        return(
            <div>
                <h2 className="text-center"> Donor List</h2>
                <div className="row">
                    <table className="table table-striped table-borderd">
                        <thead>
                            <tr>
                                
                                <th> First Name</th>
                                <th> Last Name</th>
                                <th> Email Id</th>
                                <th> Father Name</th>
                                <th> Mother Name</th>
                                <th> Mobile No</th>
                                <th> Gender</th>
                                <th> Blood Group</th>
                                <th> City</th>
                                <th>Complete Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.donors.map(
                                    donor=>
                                    <tr key= {donor.id}>
                                        
                                        <td> {donor.firstName}</td>
                                        <td> {donor.lastName}</td>
                                        <td> {donor.emailId}</td>
                                        <td> {donor.fatherName}</td>
                                        <td> {donor.motherName}</td>
                                        <td> {donor.mobNo}</td>
                                        <td> {donor.gender}</td>
                                        <td> {donor.bloodGroup}</td>
                                        <td> {donor.city}</td>
                                        <td> {donor.completeAddress}</td>
                                        

                                        

                                    </tr>
                                 )
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default allDonor