import "./Hero.css";
import profile from "../assets/profile.jpg";
import { useState } from "react";

function Hero() {
  const [count, setCount] = useState(0);
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src={profile} alt="Profile" />
        </div>

        <div className="hero-text">
          <h1>Hello, I'm Aida 👋</h1>

          <h2>Frontend Developer & Climate Data Scientist</h2>

          <p>
            I am a Frontend Developer and Climate Data Scientist with a PhD in
            Agrometeorology. My research focuses on climate change, drought
            assessment, hydrological modeling, and machine learning. Passionate
            about building responsive web applications with React and
            transforming climate data into meaningful insights using Python.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => {
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </button>

            <a
              className="primary-btn"
              href="../public/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Aida_Hasheminasab_CV.pdf"
            >
              Download CV
            </a>

            <button onClick={() => setCount((prev) => prev + 1)}>
              👍 Likes ({count})
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
