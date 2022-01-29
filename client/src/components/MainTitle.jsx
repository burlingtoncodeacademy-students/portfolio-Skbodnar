import React from "react";
import "../styles/main.css";

function MainTitle() {
  return (
    <>
      <div className="main-header">
        <h1>Hey there,</h1>
        <h2>I'm Sophie</h2>
        <h4>
          I'm a <span id="background-emphasis"><strong>Software Engineer</strong></span> motivated to build digital infrastructure
         <br />
          that enables people to feel powerful and connected.
        </h4>
      </div>
    </>
  );
}

export default MainTitle;
