import "./Books.css";

const BookCard = (props) => {
  return (
    <div className="bookCard">
      <h2>{props.title}</h2>
      <p>{props.author}</p>
      <p>{props.price}€</p>
      <p>{props.genre}</p>
      <p>{props.inStock ? "In stock" : "Out of Stock"}</p>

      {!props.inStock && <button>Add to Wishlist</button>}
    </div>
  );
};

export default BookCard;
