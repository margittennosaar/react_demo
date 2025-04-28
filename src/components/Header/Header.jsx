import { NavLink, Link } from "react-router";

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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/add">Add new book</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
