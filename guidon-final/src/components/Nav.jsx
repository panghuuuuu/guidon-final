import React, { useState, useEffect } from "react";
import "../stylesheets/nav.css";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleWindowResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <section id="nav">
      <nav className="nav-bar">
        <h6 className={isMobile ? "show-browse" : "hide-browse"}>
          Browse Categories
        </h6>
        <ul className={isMobile ? "mobile-list" : "desktop-list"}>
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
          <li className={isMobile ? "hide-search" : "show-search"}>
            <svg
              className="magnifying-glass"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.50002 14.5C9.28795 14.5 10.0682 14.3448 10.7961 14.0433C11.5241 13.7418 12.1855 13.2998 12.7427 12.7427C13.2998 12.1855 13.7418 11.5241 14.0433 10.7961C14.3448 10.0682 14.5 9.28795 14.5 8.50002C14.5 7.71208 14.3448 6.93187 14.0433 6.20391C13.7418 5.47596 13.2998 4.81453 12.7427 4.25737C12.1855 3.70022 11.5241 3.25827 10.7961 2.95674C10.0682 2.65521 9.28795 2.50002 8.50002 2.50002C6.90872 2.50002 5.38259 3.13216 4.25737 4.25737C3.13216 5.38259 2.50002 6.90872 2.50002 8.50002C2.50002 10.0913 3.13216 11.6174 4.25737 12.7427C5.38259 13.8679 6.90872 14.5 8.50002 14.5ZM14.82 13.406L18.4 16.986C18.4955 17.0783 18.5716 17.1887 18.6239 17.3108C18.6762 17.4328 18.7037 17.564 18.7048 17.6968C18.7058 17.8296 18.6804 17.9613 18.63 18.0841C18.5797 18.207 18.5053 18.3186 18.4114 18.4124C18.3174 18.5062 18.2057 18.5804 18.0828 18.6306C17.9599 18.6808 17.8282 18.706 17.6954 18.7048C17.5626 18.7035 17.4314 18.6758 17.3095 18.6233C17.1875 18.5708 17.0772 18.4946 16.985 18.399L13.405 14.819C11.7975 16.0669 9.77481 16.6552 7.74877 16.4642C5.72273 16.2732 3.84562 15.3173 2.49957 13.7911C1.15351 12.2648 0.4397 10.283 0.503441 8.24894C0.567182 6.21492 1.40368 4.28164 2.84266 2.84266C4.28164 1.40368 6.21492 0.567182 8.24894 0.503441C10.283 0.4397 12.2648 1.15351 13.7911 2.49957C15.3173 3.84562 16.2732 5.72273 16.4642 7.74877C16.6552 9.77481 16.0669 11.7975 14.819 13.405L14.82 13.406Z"
                fill="#333333"
              ></path>
            </svg>
          </li>
        </ul>
      </nav>
      <hr className={isMobile ? "show-line" : "hide-line"} />
      <form class={isMobile ? "subscribe-form" : "hide-form"}>
        <p>Like reading The GUIDON? Subscribe to our newsletter</p>
        <div class="input-container">
          <input
            type="text"
            id="mobile-menu-subscribe-form-email"
            class="input-area"
            name="email"
            placeholder="Email address"
          />
          <input
            type="button"
            id="mobile-menu-subscribe-form-submit-btn"
            class="submit-btn"
            value="Subscribe"
          />
        </div>
      </form>
    </section>
  );
};

export default Nav;
