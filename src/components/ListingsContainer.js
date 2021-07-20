import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteListing }) {
  const listOfListings = listings.map(listing => {
    return (
      <ListingCard key={listing.id} listing={listing} onDeleteListing={onDeleteListing}/>
    )
  })

  return (
    <main>
      <ul className="cards">
        {listOfListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
