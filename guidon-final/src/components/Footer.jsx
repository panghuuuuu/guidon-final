import React from "react";
import "../stylesheets/footer.css";
const Footer = () => {
  return (
    <section id="footer">
      <div class="container footer-container">
        <div class="footer-main">
          <div class="footer-description">
            <figure class="footer-logo-wrapper">
              <img
                src="https://theguidon.com/1112/main/wp-content/themes/main2223/assets/images/header_white.svg"
                alt="The GUIDON logo"
              />
            </figure>
            <p>
              The GUIDON is the official student publication of the Ateneo de
              Manila University.
            </p>
          </div>
          <ul class="footer-links-list">
            <li>News</li>
            <li>Opinion</li>
            <li>Sports</li>
            <li>Beyond Loyola</li>
            <li>Features</li>
            <li>Inquiry</li>
            <li>Research</li>
            <li>Vantage Magazine</li>
            <li>Multimedia</li>
            <li>Interactives</li>
            <li>About</li>
          </ul>
          <form className="footer-form">
            <p>Like reading The GUIDON? Subscribe to our newsletter</p>
            <div className="input-container">
              <input
                type="text"
                id="mobile-menu-subscribe-form-email"
                className="input-area"
                name="email"
                placeholder="Email address"
              />
              <input
                type="button"
                id="mobile-menu-subscribe-form-submit-btn"
                className="submit-btn"
                value="Subscribe"
              />
            </div>
          </form>
        </div>
        <div class="sub">
          <p>
            © 2022 The GUIDON All Rights Reserved
            <br />
            Designed and developed by Digital Development 2019–2020 and
            2022–2023
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
