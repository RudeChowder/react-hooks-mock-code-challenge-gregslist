import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const listingsUrl = "http://localhost:6001/listings"

  useEffect(() => {
    fetch(listingsUrl)
      .then(resp => resp.json())
      .then(data => setListings(data))
  }, [])

  const handleDeleteListing = (id) => {
    fetch(`${listingsUrl}/${id}`, {method: "DELETE"})
      .then(() => {
        const updatedListings = listings.filter( listing => listing.id !== id)
        setListings(updatedListings)
      })
  }

  const handleChangeSearch = (searchInput) => {
    setSearchTerm(searchInput)
  }

  const filteredListings = listings.filter( listing => {
    return listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="app">
      <Header onChangeSearch={handleChangeSearch} />
      <ListingsContainer listings={filteredListings} onDeleteListing={handleDeleteListing}/>
    </div>
  );
}

export default App;
