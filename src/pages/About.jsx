import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Header name="Margit Tennosaar" />
      <main>
        <h1>I am about component </h1>
      </main>
      <Footer year={2025} />
    </>
  );
};

export default About;
