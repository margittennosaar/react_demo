import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Header will be here</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/persons">Persons</NavLink></li>
          <li><NavLink to="/posts">Posts</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
