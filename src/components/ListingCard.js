import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const [isFavorited, setIsFavorited] = useState(false)
  const { id, description, image, location } = listing

  const handleUpdateFavorite = () => {
    setIsFavorited(isFavorited => !isFavorited)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={handleUpdateFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleUpdateFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => onDeleteListing(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
