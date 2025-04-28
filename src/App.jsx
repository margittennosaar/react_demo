import { createBrowserRouter, RouterProvider } from "react-router";
import { use, useState } from "react";
import { books } from "./data/booksData";
import "./App.css";
import Root from "./pages/Root";
import About from "./pages/About";
import BookList from "./components/Books/BookList";
import AddBookForm from "./pages/AddBookForm";

const App = () => {
  const [booksData, setBooksData] = useState(books);

  const addBookHandler = (newBook) => {
    setBooksData((prev) => [
      ...prev,
      { ...newBook, id: Date.now(), inStock: true, isFavorite: false },
    ]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/books",
          element: (
            <BookList booksData={booksData} setBooksData={setBooksData} />
          ),
        },
        {
          path: "/add",
          element: <AddBookForm onAddBook={addBookHandler} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
