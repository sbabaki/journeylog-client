import "./Footer.scss";
import Logo from "../../assets/logo/journeylog-logo.png";

import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <img className="footer__logo" src={Logo} alt="journeylog-logo" />
          <p>Your virtual travel map.</p>
        </div>
        <div className="footer__links">
          <div>
            <a href="/" className="footer__link">
              About
            </a>
          </div>
          <div>
            <a href="/" className="footer__link">
              Contact
            </a>
          </div>
          <div>
            <a href="/" className="footer__link">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; 2024 JourneyLog. All rights reserved.</p>
      </div>
    </footer>
  );
}
