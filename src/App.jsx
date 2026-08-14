import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Counter from "./components/Counter";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <Hero />
      <Counter />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
