import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const AddBookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      price: parseFloat(price),
      genre,
    };

    onAddBook(newBook);

    setTitle("");
    setAuthor("");
    setPrice("");
    setGenre("");
  };

  return (
    <>
      <Header name="Margit Tennosaar" />
      <main>
        <h1>Add new book</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <button type="submit">Add Book</button>
        </form>
      </main>
      <Footer year={2025} />
    </>
  );
};

export default AddBookForm;
