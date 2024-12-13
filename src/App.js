import React from "react";
import Hero from "./components/Hero"; 
import Projects from "./components/Projects"; 
import "./style.css"; 

const App = () => {
  return (
    <div className="app-container">
      {}
      <Hero />

      {}
      <hr className="section-divider" />

      {}
      <Projects />

      {}
      <footer className="app-footer">
        <p>
          Coded by <strong>Shanice Jones</strong> | Hosted on
          <a
            href="https://github.com/OShaniceO/dictionary-react"
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
