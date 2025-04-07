import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const name = "Margit Tennosaar";
const first_page = 1998;

const Box = () => {
  return <p>Greetings from Box component</p>;
};

const App = () => {
  return (
    <div>
      <h1>Hello, my name is {name} </h1>
      <p>I have coding {2025 - first_page} years </p>
      <Box />
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
