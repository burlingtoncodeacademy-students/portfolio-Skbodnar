import React from "react";
import "../styles/main.css";
import resume from "../images/resume.pdf";

function MainTitle() {
  return (
    <>
      <div className="main-header">
        <h1>Sophie Bodnar</h1>
        <h4>Software Developer, Frontend</h4>
        <p>
          Inspired by principles of iteration, interconnection, and
          improvisation,
          <br />I create digital experiences for people to feel powerful and
          connected.
        </p>
        <a href={resume} id="resume">
          Resume
        </a>
      </div>
       
    </>
  );
}

export default MainTitle;
