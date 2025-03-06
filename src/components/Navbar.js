import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="top-nav">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">Shanice Jones</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/commissions">Commissions</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
