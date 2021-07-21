import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListingForm from "./NewListingForm";

function App() {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sort, setSort] = useState("none")

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

  const handleChangeSort = (event) => {
    setSort(event.target.value)
  }

  const handleSubmitNewListingForm = (newListing) => {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        description: newListing.description,
        image: newListing.image,
        location: newListing.location
      })
    }

    fetch(listingsUrl, configObj)
      .then(resp => resp.json())
      .then(data => {
        setListings([...listings, data])
      })
  }

  const filteredListings = listings.filter( listing => {
    return listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const sortFilteredListings = () => {
    switch (sort) {
      case "none":
        return filteredListings
      case "description":
        return [...filteredListings].sort((a,b) => a.description.localeCompare(b.description))
      case "location":
        return [...filteredListings].sort((a,b) => a.location.localeCompare(b.location))
      case "price":
        alert("They're all free, silly!")
        return filteredListings
      default:
        return filteredListings
    }
  }

  let sortedFilteredListings = sortFilteredListings()

  return (
    <div className="app">
      <Header onChangeSearch={handleChangeSearch} onChangeSort={handleChangeSort} />
      <NewListingForm onSubmitNewListingForm={handleSubmitNewListingForm}/>
      <ListingsContainer listings={sortedFilteredListings} onDeleteListing={handleDeleteListing}/>
    </div>
  );
}

export default App;
