# Week 1

This project is a simple React application bootstrapped with Vite.
It demonstrates the use of React components, CSS styling, and modern JavaScript features.

- **React Components**: Includes a `Box` component and an `App` component in `main.jsx` that dynamically render content.
- **CSS Styling**: Custom styles are applied using `App.css` and `index.css`.


# Week 2

- Added a `Box`, `Header` and `Footer` components for modular UI rendering.
- Passed data with props.
- Updated `App.jsx` to include dynamic rendering logic.
- Improved CSS styling in `App.css` and `index.css`.

# Week 3

- Introduced a **Books Catalog** feature:
  - Added a `BookList` component to display a list of books.
  - Created a `BookCard` component for individual book details.
  - Used `booksData` to manage book information and passed it as props to `BookCard`.
- Enhanced the project structure by organizing components into a `Books` folder.
- Improved reusability and modularity of components.
- Updated styling for the new components.

# Week 4

- Enhanced the **Books Catalog** feature:
  - Introduced a `searchValue` state in the `BookList` component to manage the search term.
  - Updated the `BookList` component to include a search input field and display the search term dynamically.
  - TODO for easter holiday: add a **search functionality** to filter books based on user input.
- Added **event handlers** for user interactions:
  - `toggleStock`: Toggles the `inStock` status of a book.
  - `toggleFavorite`: Toggles the `isFavorite` status of a book.
  - `eventHandler`: Logs when the "Read More" button is clicked.
- Improved state management in the `BookList` component:
  - Used `useState` to manage the `booksData` and `searchValue` states.
  - Updated the `booksData` array dynamically based on user actions.
- Updated the `BookCard` component to handle new props for toggling stock and favorite status.
- Improved the overall user experience with better interactivity and dynamic rendering.
