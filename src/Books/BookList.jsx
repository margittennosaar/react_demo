import { useState } from "react";
import { books } from "./booksData";
import BookCard from "./BookCard";

const BookList = () => {
  const [booksData, setBooksData] = useState(books);
  const [searchValue, setSearchValue] = useState("");

  const eventHandler = (id) => {
    console.log("read more button was clicked", id);
  };

  const toggleStock = (id) => {
    const updatedArray = booksData.map((book) =>
      book.id === id ? { ...book, inStock: !book.inStock } : book
    );

    setBooksData(updatedArray);
  };

  const toggleFavorite = (id) => {
    setBooksData((prevState) =>
      prevState.map((book) =>
        book.id === id ? { ...book, isFavorite: !book.isFavorite } : book
      )
    );
  };

  const searchHandle = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <h1>Books catalog</h1>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        name="search"
        value={searchValue}
        onChange={searchHandle}
      />

      <h2>Your search word is: {searchValue}</h2>

      <div className="boxes">
        {/* TODO for easter break -> use searchValue to filter the list based on what is typed */}
        {booksData.map((book) => (
          <BookCard
            key={book.id}
            {...book}
            onEventHandler={() => eventHandler(book.id)}
            onToggleStock={toggleStock}
            onToggleFavorite={() => toggleFavorite(book.id)}
          />
        ))}
      </div>
    </>
  );
};

export default BookList;
