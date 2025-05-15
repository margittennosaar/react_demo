import { useState } from "react";
import "./BookCard.css";
import { Link } from "react-router";

const BookCard = ({
  title,
  author,
  price,
  genre,
  inStock,
  isFavorite,
  id,
  onToggleStock,
  onToggleFavorite,
  onPriceChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newPrice, setNewPrice] = useState(price);

  const handleSave = () => {
    onPriceChange(id, parseFloat(newPrice));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewPrice(price);
    setIsEditing(false);
  };
  const handleDetails = () => {};

  const isSaveDisabled =
    newPrice === "" || parseFloat(newPrice) === parseFloat(price);

  return (
    <div className="bookCard">
      <div className="bookCard-header">
        <p
          className={inStock ? "stock" : "stock outOf"}
          onClick={onToggleStock}
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
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
        ) : (
          <p className="price">{price}€</p>
        )}
      </div>
      <div className="bookCard-footer">
        <Link className="secondary" to={`/books/${id}`}>
          See more
        </Link>

        {!inStock && <button className="secondary">Add to Wishlist</button>}

        {isEditing ? (
          <>
            <button onClick={handleSave} disabled={isSaveDisabled}>
              Save
            </button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <button className="secondary" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default BookCard;
