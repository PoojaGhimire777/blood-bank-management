import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
class UserRegister extends Component {
  render() {
    return ( 
    <div>
        <ul className="header">
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink exact to="/User">Home</NavLink></button></li>
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/RegisterNewDonor">Donor Registeration</NavLink></button></li>
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/UserSearch">Search</NavLink></button></li>
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/UserStock">Blood Stock</NavLink></button></li>
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/RequestBlood">Request Blood</NavLink></button></li>
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/exit">LogOut</NavLink></button></li>
        </ul>
    
            <div >
                <div class='row donationTypes'>
                    <div className = "card col-md-12 offset-md- offset-md- text-center">
                    <header class="typeHeading"><h1 >Types of Donation</h1></header>
                        <div class="content">
                            <p style={{align: "center"}}>The human body contains five liters of blood, which is made of several useful components i.e. <strong>Whole blood</strong>, <strong>Platelet</strong>, and <strong>Plasma</strong>.</p>
                            <p style={{align: "center"}}>Each type of component has several medical uses and can be used for different medical treatments. your blood donation determines the best donation for you to make.</p>
                            <p style={{align: "center"}}>For <strong>plasma</strong> and <strong>platelet</strong> donation you must have donated whole blood in past two years.</p>
                        </div>
                            <br></br>
                        <ul class="nav nav-tabs">
                            <li onclick="openInfo(event, 'wholeBlood')" id="wb" class=" active infoLink"><a href="javascript:void(0)">Whole Blood</a></li>
                            <li onclick="openInfo(event, 'plasma')" id="pls" class=" infoLink"><a href="javascript:void(0)">Plasma</a></li>
                            <li onclick="openInfo(event, 'platelet')" id="plt" class=" infoLink"><a href="javascript:void(0)">Platelet</a></li>
                        </ul>
                        <div class='row tabInfo'   id='wholeBlood'>
                            <div class='col-md-4 '>
                                <h3>What is it?</h3>
                                <p>Blood Collected straight from the donor after its donation usually separated into red blood cells, platelets, and plasma.</p>
                                <h3>Who can donate?</h3>
                                <p>You need to be 18-65 years old, weigh 45kg or more and be fit and healthy.</p>
                            </div>
                        <div class='col-md-4 infoContent'>
                            <h3>User For?</h3>
                            <p>Stomach disease, kidney disease, childbirth, operations, blood loss, trauma, cancer, blood diseases, haemophilia, anemia, heart disease.</p>
                            <h3>Lasts For?</h3>
                            <p>Red cells can be stored for 42 days.</p>
                        </div>
                        <div class='col-md-4 '>
                            <h3>How long does it take?</h3>
                            <p>15 minutes to donate.</p>
                            <h3>How often can I donate?</h3>
                            <p>Every 12 weeks</p>
                        </div>
                    </div>
                    <div class='row tabInfo'  style={{display:"none"}}   id='plasma'>
                        <div class='col-md-4 '>
                            <h3>What is it?</h3>
                            <p>The straw-coloured liquid in which red blood cells, white blood cells, and platelets float in.Contains special nutrients which can be used to create 18 different type of medical products to treat many different medical conditions.</p>
                            <h3>Who can donate?</h3>
                            <p>You need to be 18-70 (men) or 20-70 (women) years old, weigh 50kg or more and must have given successful whole blood donation in last two years. </p>
                        </div>
                        <div class='col-md-4 infoContent'>
                            <h3>User For?</h3>
                            <p>	Immune system conditions, pregnancy (including anti-D injections), bleeding, shock, burns, muscle and nerve conditions, haemophilia, immunisations.</p>
                            <h3>Lasts For?</h3>
                            <p>Plasma can last up to one year when frozen.</p>
                        </div>
                        <div class='col-md-4 '>
                        <h3>How  does it work?</h3>
                        <p>We collect your blood, keep plasma and return rest to you by apheresis donation.</p>
                        <h3>How long does it take?</h3>
                        <p>15 minutes to donate.</p>
                        <h3>How often can I donate?</h3>
                        <p>Every 2-3 weeks.</p>
                        </div>
                    </div>
                    <div class='row tabInfo' style={{display:"none"}}  id='platelet'>
                        <div class='col-md-4 '>
                            <h3>What is it?</h3>
                            <p>The tiny 'plates' in blood that wedge together to help to clot and reduce bleeding. Always in high demand, Vital for people with low platelet count, like malaria and cancer patients.</p>
                            <h3>Who can donate?</h3>
                            <p>You need to be 18-70 years old (men), weigh 50kg or more and have given a successful plasma donation in the past 12 months</p>
                        </div>
                        <div class='col-md-4 infoContent'>
                            <h3>User For?</h3>
                            <p>Cancer, blood diseases, haemophilia, anaemia, heart disease, stomach disease, kidney disease, childbirth, operations, blood loss, trauma, burns.</p>
                            <h3>Lasts For?</h3>
                            <p>Just five days..</p>
                        </div>
                        <div class='col-md-4 '>
                            <h3>How does it work?</h3>
                            <p>We collect your blood, keep platelet and return rest to you by apheresis donation.</p>
                            <h3>How long does it take?</h3>
                            <p>45 minutes to donate.</p>
                            <h3>How often can I donate?</h3>
                            <p>Every 2 weeks</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        <div className = "container">
            <div className = "row">
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">Search Donor</h2>
                        <div className="card-body" >
                          <div className="text-center">
                            <div>
                                <div className="row">
                                    <table className="table table-striped table-borderd table-center">
                                        <thead>
                                            <tr>
                                                <th><b>Blood Type</b></th>
                                                <th><b>Donate Blood To</b></th>
                                                <th><b>Receive Blood From</b></th>
                                            </tr>
                                            <tr>
                                                <td><span style={{color: "#961e1b"}}><b>A+</b></span></td>
                                                <td>A+ AB+</td>
                                                <td>A+ A- O+ O-</td>            
                                            </tr>
                                            <tr>
                                                <td><span style={{color: "#961e1b"}}><b>O+</b></span></td>
                                                <td>O+ A+ B+ AB+</td>
                                                <td>O+ O-</td>
                                            </tr>
                                            <tr>
                                                <td><span style={{color: "#961e1b"}}><b>B+</b></span></td>
                                                <td>B+ AB+</td>
                                                <td>B+ B- O+ O-</td>      
                                            </tr>
                                            <tr>
                                                <td><span style={{color: "#961e1b"}}><b>AB+</b></span></td>
                                                <td>AB+</td>
                                                <td>Everyone</td>
                                            </tr>   
                                            <tr>
                                                <td><span style={{color: "#961e1b"}}><b>A-</b></span></td>
                                                <td>A+ A- AB+ AB-</td>
                                                <td>A- O-</td>
                                            </tr>
                                            <tr>
                                                <td><span style={{color: "#961e1b"}}><b>O-</b></span></td>
                                                <td>Everyone</td>
                                                <td>O-</td>
                                            </tr>
                                            <tr>
                                                <td><span style={{color: "#961e1b"}}><b>B-</b></span></td>
                                                <td>B+ B- AB+ AB-</td>
                                                <td>B- O-</td>
                                            </tr>
                                            <tr>
                                                <td><span style={{color: "#961e1b"}}><b>AB-</b></span></td>
                                                <td>AB+ AB-</td>
                                                <td>AB- A- B- O-</td>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
export default UserRegister;