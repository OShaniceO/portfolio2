import React from "react";
import "../style.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Hi, I'm Shanice Jones</h1>
        <h2>Front-end Developer based in South Africa</h2>
        <p>A Portfolio Showcasing My Coding Journey</p>
        <p>
          I'm based in Cape Town, Western Cape. I've curated a portfolio
          showcasing all my favorite projects.
        </p>

        {}
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

        {}
        <div className="additional-links">
          <p>
            <strong>LinkedIn:</strong> None
          </p>
          <p>
            <strong>Resume:</strong>{" "}
            <a href="https://www.scribd.com/document/804432785/S-J-CV-Resume" target="_blank">
             Resume
            </a>
          </p>
        </div>
      </div>

      {}
      <div className="hero-image">
        <img
          src={require("../assets/images/RSA.jpg")}
          alt="Shanice Jones, Front-end Developer"
        />
      </div>
    </div>
  );
};

export default Hero;
