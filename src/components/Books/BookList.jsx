import { useState } from "react";
import { books } from "../../data/booksData";
import BookCard from "./BookCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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

  const handlePriceChange = (id, newPrice) => {
    setBooksData((prevState) =>
      prevState.map((book) =>
        book.id === id ? { ...book, price: parseFloat(newPrice) } : book
      )
    );
  };

  const searchHandle = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredBooks = booksData.filter((book) => {
    const search = searchValue.toLowerCase();
    return (
      book.title.toLowerCase().includes(search) ||
      book.author.toLowerCase().includes(search)
    );
  });

  return (
    <>
      <Header name="Margit Tennosaar" />
      <div className="books">
        <h1>Books catalog</h1>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          name="search"
          value={searchValue}
          onChange={searchHandle}
        />
        <p>Your search word is: {searchValue}</p>

        <div className="boxes">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                {...book}
                onEventHandler={() => eventHandler(book.id)}
                onToggleStock={toggleStock}
                onToggleFavorite={() => toggleFavorite(book.id)}
                onPriceChange={handlePriceChange}
              />
            ))
          ) : (
            <p>No matching books found. Try another search.</p>
          )}
        </div>
      </div>
      <Footer year={2025} />
    </>
  );
};

export default BookList;
