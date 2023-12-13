import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Persons from './routes/Persons';
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import Posts from './routes/Posts';

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Margit', title: 'CEO', age: 29 },
    { id: 2, name: 'Kati', title: 'developer', age: 25 },
    { id: 3, name: 'Karin', title: 'designer', age: 45 },
  ]);
  const [search, setSearch] = useState('');

  const removeHandler = (id) => {
    const updatedArray = persons.filter((person) => person.id !== id);
    setPersons(updatedArray);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/posts', element: <Posts /> },
        {
          path: '/persons',
          element: (
            <Persons
              searchHandler={searchHandler}
              removeHandler={removeHandler}
              search={search}
              persons={persons}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
