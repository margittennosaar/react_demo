import { Link } from "react-router";
import "./Header.css";
const Header = ({ name }) => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <h2>{name}</h2>
        </Link>
      </div>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/about">About</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
