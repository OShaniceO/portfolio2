import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Assignments from "./components/Assignments";
import Commissions from "./components/Commissions";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <hr className="section-divider" />
                <section id="assignments">
                  <Assignments />
                </section>
                <hr className="section-divider" />
                <Projects />
              </main>
            }
          />
          <Route path="/commissions" element={<Commissions />} />
        </Routes>
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
    </Router>
  );
};

export default App;
