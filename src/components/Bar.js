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
            <a
              href="#assignments"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("assignments");
              }}
            >
              Assignments
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#commissions"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("commissions");
              }}
            >
              Commission
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Bar;
