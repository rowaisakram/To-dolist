import React from "react";

const Search = ({ searchValue, handleSearchChange }) => {
  return (
    <input
      type="text"
      value={searchValue}
      onChange={handleSearchChange}
      placeholder="Search tasks"
    />
  );
};

export default Search;
