import React from "react";
import "../stylesheets/feedback.css";
const Feedback = () => {
  return (
    <section id="feedback">
      <div class="container feedback-container">
        <div class="form-wrapper">
          <h1 class="heading">Tell us what you think!</h1>
          <p class="main-text">
            Have any questions, clarifications, or comments? Send us a message
            through the form below.
          </p>
          <form>
            <label for="feedback-form-email">Email Address</label>
            <input id="feedback-form-email" type="text" name="email" />

            <label for="feedback-form-message">Message</label>
            <textarea
              id="feedback-form-message"
              type="text"
              name="message"
              rows="10"
            ></textarea>

            <input
              type="button"
              class="btn"
              id="feedback-form-submit-btn"
              onclick="onFeedbackSubmit('/')"
              value="Send"
            />
          </form>
        </div>
        <div id="contribute-link">
          <h1 class="heading">Contribute Form</h1>
          <p class="main-text">
            Fill out our form in the Contribute page and write for The GUIDON!
            Click the button below to view our Take the Lede Crowdsourcing Form.
          </p>

          <a
            href="https://theguidon.com/1112/main/contribute"
            class="contribute"
          >
            <button class="btn">Contribute</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
