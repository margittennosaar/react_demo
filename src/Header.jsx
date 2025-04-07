const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <h2>{props.name}</h2>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Persons</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
