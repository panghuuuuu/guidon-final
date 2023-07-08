import React from "react";
import "../stylesheets/uaap.css";
import { UAAPNews } from "../content/uaap";
const UAAP = () => {
  const news = Object.entries(UAAPNews).map(([key, value], index) => (
    <div key={index} className="indiv-article">
      <img src={value.image} alt={key} />
      <div className="indiv-details">
        <h6 className={value.label} id="label">
          {value.label}
        </h6>
        <h5 className="indiv-title">{key}</h5>
        <p className="indiv-desc">{value.excerpt}</p>
        <h6 className="indiv-date">{value.date}</h6>
      </div>
    </div>
  ));
  return (
    <section id="uaap">
      <div className="container uaap-container">
        <h1>UAAP Season 85</h1>
        <div className="front-articles">{news}</div>
      </div>
      <hr />
    </section>
  );
};

export default UAAP;
