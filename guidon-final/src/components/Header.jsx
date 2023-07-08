import React from "react";
import "../stylesheets/header.css";
const Header = () => {
  return (
    <section id="header">
      <div className="logo-banner">
        <figure className="logo-wrapper">
          <img
            className="gdn-logo"
            src="https://theguidon.com/1112/main/wp-content/themes/main2223/assets/images/header_white.svg"
            alt="The GUIDON logo"
          />
        </figure>
      </div>
    </section>
  );
};

export default Header;
