import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import axios from "axios";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch book:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <LoaderSpinner />;
  if (!book) return <p>Book not found.</p>;

  return (
    <div className="book-detail">
      <h1>{book.title}</h1>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Genre:</strong> {book.genre}
      </p>
      <p>
        <strong>Price:</strong> {book.price}€
      </p>
      <p>
        <strong>Status:</strong> {book.inStock ? "In Stock" : "Out of Stock"}
      </p>
      <p>
        <strong>Favorite:</strong> {book.isFavorite ? "♥️" : "♡"}
      </p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default BookDetail;
