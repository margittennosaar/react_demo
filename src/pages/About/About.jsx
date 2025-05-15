import "./About.css";

const About = () => {
  return (
    <>
      <h1>React Demo Application</h1>
      <div className="about-container">
        <p>
          This application was developed as part of a school project to help
          students apply and demonstrate their React skills in a realistic and
          hands-on way. It integrates routing, state management, external APIs,
          and user interaction into a single project.
        </p>

        <h2>Features Included</h2>

        <h3>Book Catalog</h3>
        <ul>
          <li>Fetches book data from a local JSON server</li>
          <li>Search functionality by title or author</li>
          <li>Filter to show only favorite books</li>
          <li>Toggle book availability (In Stock / Out of Stock)</li>
          <li>Mark or unmark books as favorite</li>
          <li>Edit book prices</li>
          <li>Add new books through a form</li>
          <li>
            Navigate to full book details via dynamic route (`/books/:id`)
          </li>
        </ul>

        <h3>Todos Page</h3>
        <ul>
          <li>Loads todo items from JSONPlaceholder API</li>
          <li>Loads users names from JSONPlaceholder API</li>
          <li>Demonstrates integration with a remote public API</li>
        </ul>

        <h3>Navigation</h3>
        <ul>
          <li>React Router-based page navigation</li>
          <li>Dynamic routing for book detail pages</li>
        </ul>

        <h2>Technologies Used</h2>
        <ul>
          <li>React (with Hooks)</li>
          <li>React Router</li>
          <li>Axios for API calls</li>
          <li>JSON Server (local backend for books)</li>
          <li>JSONPlaceholder (public test API)</li>
          <li>Basic CSS</li>
        </ul>
      </div>
    </>
  );
};

export default About;
