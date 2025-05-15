import { useState } from "react";
import BookCard from "../../components/BookCard/BookCard";
import "./BookList.css";

const BookList = ({ booksData, onPriceChange, onToggleChange }) => {
  const [searchValue, setSearchValue] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const searchHandle = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredBooks = booksData.filter((book) => {
    const search = searchValue.toLowerCase();
    const matchesSearch =
      book.title.toLowerCase().includes(search) ||
      book.author.toLowerCase().includes(search);

    const matchesFavorite = showFavoritesOnly ? book.isFavorite : true;

    return matchesSearch && matchesFavorite;
  });

  return (
    <>
      <div className="container">
        <h1>Books catalog</h1>
        <div className="books-selections">
          <div>
            <label htmlFor="search">Search</label>
            <input
              type="text"
              id="search"
              name="search"
              value={searchValue}
              onChange={searchHandle}
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="favorites"
              checked={showFavoritesOnly}
              onChange={() => setShowFavoritesOnly((prev) => !prev)}
            />
            <label htmlFor="favorites"> Show only favorites</label>
          </div>
        </div>

        <div className="books-grid">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                {...book}
                onToggleStock={() => onToggleChange(book.id, "inStock")}
                onToggleFavorite={() => onToggleChange(book.id, "isFavorite")}
                onPriceChange={(id, newPrice) => onPriceChange(id, newPrice)}
              />
            ))
          ) : (
            <p>No matching books found. Try another search.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BookList;
