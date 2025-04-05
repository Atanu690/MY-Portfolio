import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
      <Project></Project>
      <Footer></Footer>
    </>
  );
}

export default App;
