import React from "react";
import "../stylesheets/topics.css";
export const Topics = () => {
  return (
    <section id="topics">
      <div className="container topics-container">
        <h2>Most read topics</h2>
        <p>Browse through the tags below for the most read topics</p>
        <div class="tags-container">
          <a class="tag" href="https://theguidon.com/1112/main/tag/breaking/">
            breaking{" "}
          </a>
          <a
            class="tag"
            href="https://theguidon.com/1112/main/tag/uaap-season-85/"
          >
            UAAP Season 85{" "}
          </a>
          <a
            class="tag"
            href="https://theguidon.com/1112/main/tag/uaap-season-78/"
          >
            UAAP Season 78{" "}
          </a>
          <a
            class="tag"
            href="https://theguidon.com/1112/main/tag/blue-eagles/"
          >
            Blue Eagles{" "}
          </a>
          <a
            class="tag"
            href="https://theguidon.com/1112/main/tag/lady-eagles/"
          >
            Lady Eagles{" "}
          </a>
          <a class="tag" href="https://theguidon.com/1112/main/tag/concon/">
            ConCon{" "}
          </a>
          <a class="tag" href="https://theguidon.com/1112/main/tag/baseball/">
            baseball{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Topics;
