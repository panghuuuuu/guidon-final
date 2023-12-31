import React from "react";
import { RecentArticles } from "../content/recents";
import "../stylesheets/recents.css";
export const Recents = () => {
  const articles = Object.entries(RecentArticles).map(([key, value], index) => (
    <div key={index} className="indiv-article">
      <img src={value.image} alt={key} />
      <div className="indiv-details">
        <h5 className="indiv-title">{key}</h5>
        <p className="indiv-desc">{value.excerpt}</p>
        <h6 className="indiv-date">{value.date}</h6>
      </div>
    </div>
  ));
  return (
    <section id="recents">
      <div className="container recent-container">
        <h1>Most recent issues</h1>
        <div className="recents-articles">{articles}</div>
        <button class="btn">
          View the rest of the issues
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_263_1418)">
              <path
                d="M15.2729 0.5H9.4547C9.05304 0.5 8.72741 0.825625 8.72741 1.22728C8.72741 1.62894 9.05304 1.95456 9.4547 1.95456H13.5171L6.03138 9.44031C5.74735 9.72434 5.74735 10.1848 6.03138 10.4688C6.17335 10.6108 6.35948 10.6818 6.5456 10.6818C6.73173 10.6818 6.91788 10.6108 7.05988 10.4688L14.5456 2.98306V7.04547C14.5456 7.44713 14.8713 7.77275 15.2729 7.77275C15.6746 7.77275 16.0002 7.44713 16.0002 7.04547V1.22728C16.0002 0.825625 15.6745 0.5 15.2729 0.5Z"
                fill="white"
              ></path>
              <path
                d="M12.3636 7.77183C11.962 7.77183 11.6363 8.09745 11.6363 8.49911V15.0446H1.45453V4.86273H8C8.40166 4.86273 8.72728 4.53711 8.72728 4.13545C8.72728 3.7338 8.40166 3.4082 8 3.4082H0.727281C0.325625 3.4082 0 3.73383 0 4.13548V15.7719C0 16.1735 0.325625 16.4991 0.727281 16.4991H12.3637C12.7653 16.4991 13.0909 16.1735 13.0909 15.7718V8.49911C13.0909 8.09745 12.7653 7.77183 12.3636 7.77183Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_263_1418">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0 0.5)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Recents;
