import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  const listingsUrl = "http://localhost:6001/listings"

  useEffect(() => {
    fetch(listingsUrl)
      .then(resp => resp.json())
      .then(data => setListings(data))
  }, [])

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings}/>
    </div>
  );
}

export default App;
