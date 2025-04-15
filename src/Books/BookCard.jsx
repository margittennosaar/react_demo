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
  ...rest
}) => {
  /*   console.log(rest); */
  const eventHandler = () => {
    console.log("You clicked 'Add wishlist' button is clicked");
  };

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
        <div></div>
        <p className="price">{price}€</p>
      </div>
      <div className="bookCard-footer">
        {/*       <button onClick={() => onEventHandler(id)}>Read more</button> */}
        <button onClick={onEventHandler}>See more</button>
        {!inStock && <button onClick={eventHandler}>Add to Wishlist</button>}
      </div>
    </div>
  );
};

export default BookCard;
