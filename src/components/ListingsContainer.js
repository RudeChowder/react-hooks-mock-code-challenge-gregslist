import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings }) {
  const listOfListings = listings.map(listing => {
    return (
      <ListingCard key= {listing.id} listing={listing} />
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
