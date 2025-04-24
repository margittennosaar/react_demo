import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Root from "./pages/Root";
import About from "./pages/About";
import BookList from "./components/Books/BookList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/books",
    element: <BookList />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
