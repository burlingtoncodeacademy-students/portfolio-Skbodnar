import React from "react";
import "../../styles/main.css";
import headshot from "../../images/headshot.jpeg";

function About() {
  return (
    <>
      <div className="about-section" id="about">
        <p id="pageTitle">
          <pre>A BO UT.</pre>
        </p>

        <div id="aboutContent">
          <span id="aboutBlurb">
            <p>
              I balance an aspirational vision for what’s possible with rigorous
              attention for how we continue to reach that potential. <br />
              <br />
              My background in storytelling, community-based advocacy, and
              leadership development has shaped my motivation to use tech to create conditions for people to live authentically with agency and dignity.
              <br />
             
            </p>
          </span>
          <img
            id="headshot"
            src={headshot}
            width="250px"
            alt="headshot of Sophie"
          ></img>
        </div>
      </div>
    </>
  );
}

export default About;
