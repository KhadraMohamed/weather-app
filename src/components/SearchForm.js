import React from "react";
import Proptypes from "prop-types";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);
  return (
    <div className="search-form">
      <input type="text" onChange={handleInputChange} value={searchText} />
      <button type="submit" onClick={onSubmit}>
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
  onSubmit: Proptypes.func.isRequired,
};
