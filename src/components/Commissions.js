import React from "react";
import EmailIcon from "../assets/images/email.png";

const Commissions = () => {
  return (
    <div className="commissions-page">
      <div className="commissions-container">
        <h1>Website Commissions</h1>

        <div className="commission-info">
          <h2>Services Offered</h2>
          <ul>
            <li>Custom Website Development</li>
            <li>Responsive Design Implementation</li>
            <li>Website Maintenance</li>
            <li>UI/UX Improvements</li>
          </ul>

          <h2>Contact</h2>
          <p className="contact-email">
            For inquiries about website development services, please contact me
            at:
            <br />
            <div className="email-container">
              <img src={EmailIcon} alt="Email" className="email-icon" />
              <a href="mailto:Shanicejones@gmail.com">Shanicejones@gmail.com</a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Commissions;
