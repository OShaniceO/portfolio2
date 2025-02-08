import React from "react";
import "../style.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="stars">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="star"></div>
        ))}
      </div>
      <div className="hero-text">
        <h1>Hi, I'm Shanice Jones</h1>
        <h2>Front-end Developer based in South Africa</h2>
        <br />
        <p>A Portfolio Showcasing My Coding Journey</p>
        <p>
          I'm based in Cape Town, Western Cape. I've curated a portfolio
          showcasing all my favorite projects.
        </p>
        <br />
        <div className="contact-details">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:shanicejones744@gmail.com">
              shanicejones744@gmail.com
            </a>
          </p>
          <br />
          <p>
            <strong>Phone:</strong> 074 724 3966
          </p>
          <br />
          <p>
            <a
              href="https://www.linkedin.com/in/shanice-jones-b23a50341/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <br />
        </div>
        <div className="additional-links">
          <a
            href="https://www.scribd.com/document/804443953/S-J-CV-Resume"
            target="_blank"
            rel="noreferrer"
            className="hero-button"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img
          src={require("../assets/images/pfp.png")}
          alt="Shanice Jones, Front-end Developer"
        />
      </div>
      <div className="skill">
        <img src={require("../assets/images/html.png")} alt="html" />
        <img src={require("../assets/images/css.png")} alt="css" />
        <img src={require("../assets/images/js.png")} alt="javascript" />
        <img src={require("../assets/images/react.png")} alt="react" />
      </div>
    </div>
  );
};

export default Hero;
