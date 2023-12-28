import "./App.scss";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Experience from "./Components/Experience";
import Foooter from "./Components/Foooter";
import Header from './Components/Header';
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contacts />
      <Foooter />
    </div>
  );
}

export default App;

