import React, { useState, useEffect } from "react";
import { MainArticles } from "../content/main";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../stylesheets/main.css";

const Main = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    function handleWindowResize() {
      setIsMobile(window.innerWidth <= 568);
    }

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleSlide = () => {
    setCurrentSlide((prevSlide) => {
      const lastIndex = Object.keys(MainArticles).length - 1;
      return prevSlide === lastIndex ? 0 : prevSlide + 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(handleSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const articles = Object.entries(MainArticles).map(([key, value], index) => (
    <div key={index} className="indiv-article">
      <img src={value.image} alt={key} />
      <div className="indiv-details">
        <h6 className={value.label} id="label">
          {value.label}
        </h6>
        <h5 className="indiv-title">{key}</h5>
        <h4 className="indiv-desc">{value.description}</h4>
        <h6 className="indiv-date">{value.date}</h6>
      </div>
    </div>
  ));

  const mainArticle = Object.entries(MainArticles)[0];
  const [mainTitle, mainData] = mainArticle;
  const {
    label: mainLabel,
    description: mainDescription,
    date: mainDate,
    image: mainImage,
  } = mainData;

  const CustomButtonGroup = ({ next, previous }) => (
    <div className="custom-button-group">
      <button onClick={previous} className="custom-prev-button">
        Previous
      </button>
      <button onClick={next} className="custom-next-button">
        Next
      </button>
    </div>
  );

  return (
    <section id="main">
      <div className={`main-articles ${isMobile ? "mobile" : ""}`}>
        {isMobile ? (
          <Carousel
            responsive={{
              mobile: {
                breakpoint: { max: 568, min: 0 },
                items: 1,
              },
            }}
            beforeChange={(previousSlide, currentSlide) => {
              setCurrentSlide(currentSlide);
            }}
            showDots
            activeIndex={currentSlide}
            renderButtonGroupOutside
            customButtonGroup={<CustomButtonGroup />}
          >
            {articles}
          </Carousel>
        ) : (
          <div className="container main-container">
            <div className="desktop-main">
              <div className="highlight-article">
                <img src={mainImage} alt="main" />
                <div className="indiv-details">
                  <h6 className={mainLabel} id="label">
                    {mainLabel}
                  </h6>
                  <h5 className="indiv-title">{mainTitle}</h5>
                  <h4 className="indiv-desc">{mainDescription}</h4>
                  <h6 className="indiv-date">{mainDate}</h6>
                </div>
              </div>
              <div className="sub-articles">{articles.slice(1)}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Main;
