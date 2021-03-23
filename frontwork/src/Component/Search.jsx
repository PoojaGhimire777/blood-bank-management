import React from 'react';

const Search = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search Donor/Blood"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default Search