import "./Header.css";
const Header = ({ name }) => {
  return (
    <header>
      <div className="logo">
        <h2>{name}</h2>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Persons</li>
          <li>Books</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
