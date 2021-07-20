import React, { useState } from "react";

function Search({ onChangeSearch }) {
  const [searchInput, setSearchInput] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    onChangeSearch(searchInput)
  }

  const handleChangeSearchInput = (event) => {
    setSearchInput(event.target.value)
  }

  return (
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
  );
}

export default Search;
