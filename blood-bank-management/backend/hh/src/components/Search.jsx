import React from 'react';
import { NavLink } from 'react-router-dom';

const Search = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  
  
  return (
    <div>
      <br></br>
      <ul className="header"> 
          
          <li><NavLink exact to="/Donor">Donor</NavLink></li>
          <li><NavLink to ="/search">Search Donor</NavLink></li>
          <li><NavLink to ="/Stock">Stock</NavLink></li>
          <li><NavLink to ="/DeleteDonor">Delete Donor</NavLink></li>
          <li><NavLink to ="/exit">Exit</NavLink></li>

         </ul>
        <div style={{
                               display: "flex",
                               justifyContent: "center",
                               alignItems: "center"
                              }} >
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search Donor/Blood"}
     onChange={(e) => setKeyword(e.target.value)}
    />
    </div></div>
  );
}

export default Search