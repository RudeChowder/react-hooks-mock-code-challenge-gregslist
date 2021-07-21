import React, { useState } from "react";

function Search({ onChangeSearch, onChangeSort }) {
  const [searchInput, setSearchInput] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    onChangeSearch(searchInput)
  }

  const handleChangeSearchInput = (event) => {
    setSearchInput(event.target.value)
  }

  return (
    <>
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="search free stuff"
          value={searchInput}
          onChange={handleChangeSearchInput}
        />
        <button type="submit">🔍</button>
      </form>
      <label>Sort by: </label>
      <select name="sort" onChange={onChangeSort}>
        <option value="none">None</option>
        <option value="description">Description</option>
        <option value="location">Location</option>
        <option value="price">Price</option>
      </select>
    </>
  );
}

export default Search;
