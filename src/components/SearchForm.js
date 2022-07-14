import React from "react";
import Proptypes from "prop-types";

function SearchForm({ searchText, setSearchText, getForecast }) {
  const handleInputChange = (event) => setSearchText(event.target.value);
  const handleClick = () => {
    getForecast();
  };
  return (
    <div className="search-form">
      <input type="text" onChange={handleInputChange} value={searchText} />
      <button type="submit" onClick={handleClick}>
        {" "}
        Search{" "}
      </button>
    </div>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  searchText: Proptypes.string.isRequired,
  setSearchText: Proptypes.func.isRequired,
  getForecast: Proptypes.func.isRequired,
};
