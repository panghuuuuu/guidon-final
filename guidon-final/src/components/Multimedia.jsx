import React from "react";
import "../stylesheets/multimedia.css";

const Multimedia = () => {
  return (
    <section id="index-multimedia">
      <div className="main-wrapper">
        <h2 className="multimedia-title">Multimedia</h2>
        <hr />
      </div>
      <h1
        className="article-wrapper first three-article-view-first"
        id="three-article-view-first"
      >
        <div className="main-wrapper"></div>
      </h1>
      <div className="three-article-view main-wrapper">
        <a
          href="https://fb.watch/f0Oa-SlVHb/"
          target="_blank"
          className="article-wrapper l"
          style={{ gridArea: "a0" }}
          rel="noreferrer"
        >
          <img
            src="https://theguidon.com/1112/main/wp-content/themes/main2223/assets/images/logo_gdn_16x9.png"
            alt=""
          />

          <p className="label">
            <span style={{ color: "#915f0f" }}>Broadcast News</span>
          </p>
          <h5 className="indiv-title">
            OFWs tangled in Recession, renew pressure for help on New
            Administration
          </h5>
          <p className="indiv-desc">
            Despite the numerous existing policies for Filipino migrant workers,
            migration issues continue to persist amid the enduring pandemic.
            This report looks into current policy improvements to be implemented
            by the incoming administration.
          </p>
          <h6 className="indiv-date">August 20, 2022</h6>
        </a>

        <a
          href="https://tgdn.co/3bZaoHc"
          target="_blank"
          className="article-wrapper s"
          style={{ gridArea: "a1" }}
          rel="noreferrer"
        >
          <img
            src="https://theguidon.com/1112/main/wp-content/uploads/2022/08/01-081022-OrSem-Tindig-Day-6-Sy-30-800x533.jpeg)"
            alt=""
          />

          <p className="label">
            <span style={{ color: "#e4bb4e" }}>Photos</span>{" "}
            <span style={{ color: "#1c4480" }}>News</span>
          </p>
          <h5 className="indiv-title">
            In welcoming display, LS community greets 2600 freshmen in OrSem
            Tindig
          </h5>
          <h6 className="indiv-date">August 13, 2022</h6>
        </a>

        <a
          href="https://www.facebook.com/TheGUIDON/photos/a.123251847713976/5384600251579083"
          target="_blank"
          className="article-wrapper s"
          style={{ gridArea: "a2" }}
          rel="noreferrer"
        >
          <img
            src="https://lh3.googleusercontent.com/d/1ppykEB8HtdI40bgsG0jw6SsElmsXhEvl"
            alt=""
          />

          <p className="label">
            <span style={{ color: "#6a91cd" }}>Graphic Design</span>
          </p>
          <h5 className="indiv-title">National Indigenous Peoples' Day</h5>
          <div className="excerpt"></div>
          <h6 className="indiv-date">August 9, 2022</h6>
        </a>
      </div>
    </section>
  );
};

export default Multimedia;
