import { useState } from "react";
import "./Books.css";

const BookCard = ({
  title,
  author,
  price,
  genre,
  inStock,
  isFavorite,
  onEventHandler,
  id,
  onToggleStock,
  onToggleFavorite,
  onPriceChange,
  ...rest
}) => {
  const [isEditing, setIsEdititng] = useState(false);
  const [newPrice, setNewPrice] = useState(price);

  const handleSave = () => {
    onPriceChange(id, newPrice);
    setIsEdititng(!isEditing);
  };

  const handleCancel = () => {
    setNewPrice(price);
    setIsEdititng(!isEditing);
  };

  const isSaveDisabled =
    newPrice === "" || parseFloat(newPrice) === parseFloat(price);

  return (
    <div className="bookCard">
      <div className="bookCard-header">
        <p
          className={inStock ? "stock" : "stock outOf"}
          onClick={() => onToggleStock(id)}
        >
          {inStock ? "In stock" : "Out of Stock"}
        </p>
        <h2>{title}</h2>
        <p className="favIcon" onClick={onToggleFavorite}>
          {isFavorite ? "♥️" : "♡"}
        </p>
        <p>{author}</p>
        <p className="genre">{genre}</p>
      </div>
      <div className="bookCard-content">
        {isEditing ? (
          <input
            type="text"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
        ) : (
          <p className="price">{price}€</p>
        )}
      </div>
      <div className="bookCard-footer">
        <button onClick={onEventHandler}>See more</button>
        {!inStock && <button>Add to Wishlist</button>}

        {isEditing ? (
          <>
            <button onClick={handleSave} disabled={isSaveDisabled}>
              Save
            </button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <button onClick={() => setIsEdititng(!isEditing)}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default BookCard;
