import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import "./style.css";
import Assignments from "./components/Assignments";
import Commissions from "./components/Commissions";
import Bar from "./components/Bar";

const App = () => {
  return (
    <div className="app-container">
      <Bar />
      <main>
        <Hero />
        <hr className="section-divider" />
        <section id="assignments">
          <Assignments />
        </section>
        <hr className="section-divider" />
        <Projects />

        <hr className="section-divider" />
        <section id="commissions">
          <Commissions />
        </section>
      </main>
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
