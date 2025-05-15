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

# Week 5

- Added **Search Functionality**:
  - Implemented a feature to filter books based on the user's search input.
  - Updated the `BookList` component to dynamically display books that match the search term.
- **Implemented Routing**:
  - Added `react-router` to enable routing in the application.
  - Used `createBrowserRouter` to define and manage routes.
  - Created routes for the following pages:
    - `Home`: Displays the homepage.
    - `Books Catalog`: Displays the list of books.
    - `About`: Displays an About component.
  - Updated `App.jsx` to use `createBrowserRouter` and `RouterProvider` for routing.
- **Created Navigation**:
  - Added links to navigate between components.
- **Improved Project Structure**:
  - Organized new components into different folders.
- **Price Update Feature**:
  - Added functionality to update the price of books dynamically.
  - Introduced a new function in the `BookList` component to handle price changes.
  - Updated the `BookCard` component to display the updated price.
  - Ensured that price updates are reflected in the UI in real-time.

# Week 6

- **Add New Book Feature**:
  - Implemented functionality to add a new book to the catalog.
  - Created a form component to collect book details (e.g., title, author, price, and stock status).
  - Ensured the new book is dynamically added to the `booksData` array and displayed in the `BookList` component.

- **State Lifting**:
  - Lifted the state for `booksData` from the `BookList` component to the `App` component.
  - Centralized state management in the `App` component to improve data flow and maintainability.
  - Updated the `BookList` and `BookCard` components to use props for accessing and updating state.

- **Routing Fixes**:
  - Refactored routing to use `Outlet` for nested routes.
  - Updated `App.jsx` to define a layout component that includes shared elements (e.g., navigation) and renders child routes using `Outlet`.
  - Ensured seamless navigation between pages and proper rendering of nested components.
  
- # Week 7

  - Replaced `createBrowserRouter` with `BrowserRouter`, `Routes`, and `Route` to ensure components re-render correctly on state updates.
  - Simplified route definitions and allowed dynamic props to be passed directly to components like `BookList` and `AddBookForm`.
  - Ensured that the routing setup now supports live state updates and better maintainability.
  - Introduced a toggle option in `BookList` to show only favorite books.

- **Book Detail Page (`/books/:id`)**:
  - Created a new route for individual book detail views.
  - Used `useParams` and `useEffect` to fetch a single book based on its ID.
  - Displayed detailed book information including title, author, genre, price, stock status, and favorite status.
  - Introduced a "Go back" button using `useNavigate`.

- **Bug Fixes and Improvements**:
  - Fixed a critical issue where book updates (like price and toggle changes) didn’t trigger UI re-renders due to how props were passed in the router.
  - Corrected the `handlePriceChange` function to avoid replacing the entire book object with a partial one.
  - Ensured that `res.data` from `axios.patch()` is used to update local state accurately.
  - Synced the `BookCard`'s local `price` state with props using `useEffect` to reflect updated values correctly after editing.

- **Project Landing Page**:
  - Added a `About.jsx` component to serve as the entry point of the app.
  - Summarized the features of the app and explained its purpose as a school project.
  - Linked the landing page into the routing structure for better user orientation.

