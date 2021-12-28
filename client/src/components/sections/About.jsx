import React from "react";
import "../../styles/main.css";
import HomeButton from "../HomeButton";
import NavBar from "../NavBar";
import headshot from "../../images/headshot.jpeg";

function About() {
  return (
    <>
      <HomeButton />
      <p id="pageTitle">
        <pre>A BO UT.</pre>
      </p>
      <NavBar />

      <div id="aboutContent">
        <img
          id="headshot"
          src={headshot}
          width="250px"
          alt="headshot of Sophie"
        ></img>
        <span id="hello">Hi there, I'm Sophie</span>
        <span id="aboutBlurb">
          <p>
           I balance an
            <b>
              {" "}
              inspired vision for what’s possible with rigorous attention for
              how we continue to reach that potential.{" "}
            </b></p>
          <p>
            My background in storytelling, community-based advocacy, and
            leadership development has shaped my motivation to use tech as a
            vehicle to create conditions for people to feel powerful and
            connected, and live authentically with agency and dignity.
          </p>
          <p>
            I am enlivened by design that is inspired by iteration,
            interconnection, and improvisation.
          </p>
        </span>
      </div>
    </>
  );
}

export default About;
