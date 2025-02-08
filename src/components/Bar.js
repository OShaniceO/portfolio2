import React from "react";
import "../style.css";

const Bar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="top-nav">
      <div className="nav-container">
        <div className="nav-brand">
          <a href="#top">Shanice Jones</a>
        </div>
        <ul className="nav-links">
          <li>
            <a onClick={() => scrollToSection("assignments")}>Assignments</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("projects")}>Projects</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("commissions")}>Commission</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Bar;
