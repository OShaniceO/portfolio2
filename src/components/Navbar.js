import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import "./style.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />

      <Hero />

      <div className="contact-section">
        <h1>Contact Me</h1>
        <p>
          If you'd like to reach out, feel free to contact me via email or
          phone:
        </p>
        <div className="contact-details">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:shanicejones744@gmail.com">
              shanicejones744@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> 074 724 3966
          </p>
        </div>
      </div>

      <Projects />

      <footer className="app-footer">
        <p>
          Coded by <strong>Shanice Jones</strong> | Hosted on
          <a
            href="https://github.com/OShaniceO"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub{" "}
          </a>{" "}
          and
          <a
            href="https://willowy-kashata-3a436e.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
