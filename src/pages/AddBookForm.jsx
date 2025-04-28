import { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./AddBookForm.css";

const AddBookForm = ({ onAddBook }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    genre: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = { ...formData, price: parseFloat(formData.price) };

    onAddBook(newBook);
    navigate("/books");

    setFormData({ title: "", author: "", price: "", genre: "" });
  };

  return (
    <>
      <h1>Add new book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          name="title"
        />
        <input
          type="text"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          name="author"
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          name="price"
        />
        <input
          type="text"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
          name="genre"
        />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default AddBookForm;
