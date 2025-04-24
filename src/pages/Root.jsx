import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <>
      <Header name="Margit Tennosaar" />
      <main>
        <h1>I am root component</h1>
      </main>
      <Footer year={2025} />
    </>
  );
};

export default Root;
