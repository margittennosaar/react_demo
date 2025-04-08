import { books } from "./booksData";
import BookCard from "./BookCard";

const BookList = () => {
  return (
    <>
      <h1>Books catalog</h1>
      <div className="boxes">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </>
  );
};

export default BookList;
