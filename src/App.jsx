import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import BookList from "./Books/BookList";

const App = () => {
  return (
    <>
      <Header name="Margit Tennosaar" />
      <main>
        <BookList />
      </main>
      <Footer year={2025} />
    </>
  );
};

export default App;
