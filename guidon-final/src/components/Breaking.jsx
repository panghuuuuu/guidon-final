import React from "react";
import { BreakingNews } from "../content/breaking";
import "../stylesheets/breaking.css";
const Breaking = () => {
  const news = Object.entries(BreakingNews).map(([key, value], index) => (
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
    <section id="breaking">
      <div className="container breaking-container">{news}</div>
      <hr />
    </section>
  );
};

export default Breaking;
