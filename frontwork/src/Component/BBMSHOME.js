// import React, { Component } from "react";
// //import { HashHistory } from 'react-router';
// import {
//             Route,
//             NavLink,
//             HashRouter
//         } from "react-router-dom";
// import Contact from "../Contact";
// import Home from "../Home";
// import "../index.css";
// import Stuff from "../Stuff";
// import Login from "../Login"
// import CreateDonor from "./CreateDonor";
// import Admin from "./Admin";
// import Donor from "./Donor";
// import Search from "./Search";
// import StockHome from "./StockHome";
// import allDonor from "./allDonor";
// import UpdateDonor from "./UpdateDonor";
// import logout from  "./logout";
// import Main from "../Main";

// class BBMSHOME extends Component 
// {
 
//     render() 
//     {
//         return (
//                 <HashRouter>
//                 <div>
//                     <button><NavLink exact to="/welcomeall">WELCOME TO BBMSHOME</NavLink></button>
//                     <div className="content">
//                         <Route exact path="/" component={Home}/>
//                         <Route path="/stuff" component={Stuff}/>
//                         <Route path="/contact" component={Contact}/>
//                         <Route path="/Login" component={Login}/>
//                         <Route path="/adddonor" component={CreateDonor}/>
//                         <Route path="/admin" component={Admin}/>
//                         <Route exact path="/Donor" component={Donor}/>
//                         <Route path="/search" component={Search}/>
//                         <Route path="/Stock" component={StockHome}/>
//                         <Route path="/exit" component={logout}/>
//                         <Route path="/allDonor" component={allDonor}/>
//                         <Route path="/updateDonor" component={UpdateDonor}/>
//                         <Route path="/welcomeall" component={Main}/>
//                     </div>
//                 </div>
//                 </HashRouter>
//                 );
//     }

// }
// export default BBMSHOME