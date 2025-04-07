import "./App.css";
import Box from "./Box/Box";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { persons } from "./personsData";

const App = () => {
  return (
    <div>
      <Header name="Margit Tennosaar" />
      <main>
        <h1>REACT DEMO APP</h1>
        <div className="boxes">
          {persons.map((person) => (
            <Box
              key={person.id}
              id={person.id}
              fullName={person.name}
              age={person.age}
              title={person.title}
              myanimal={person.myanimal}
            />
          ))}
        </div>
      </main>
      <Footer year={2025} />
    </div>
  );
};

export default App;
