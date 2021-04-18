import React from "react";

const SearchBar = ({ searchHandler }) => {
  const handleSearchInputChange = e => {
    searchHandler(e.target.value);
  };
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};

  return (
    <form className="search">
      <input
        style={BarStyling}
        onChange={handleSearchInputChange}
        type="text"
        placeholder="Search Program..."
      />
    </form>
  );
};

export default SearchBar;