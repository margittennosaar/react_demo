import "./Books.css";

const BookCard = ({
  title,
  author,
  price,
  genre,
  inStock,
  isFavorite,
  ...rest
}) => {
  console.log(rest);

  return (
    <div className="bookCard">
      <h2>{title}</h2>
      <p>{isFavorite ? "♥️" : "♡"}</p>
      <p>{author}</p>
      <p>{price}€</p>
      <p>{genre}</p>
      <p>{inStock ? "In stock" : "Out of Stock"}</p>
      {!inStock && <button>Add to Wishlist</button>}
    </div>
  );
};

export default BookCard;
