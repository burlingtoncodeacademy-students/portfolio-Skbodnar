import React from "react";
import "../styles/navbarone.css";
import { Link } from "react-router-dom";

function NavBarOne() {
  return (
    <>
      <div className="navButtons">
        <span id="buttons">
          <Link to="/about">About</Link>
        </span>

        <span id="buttons">
          <Link to="/contact">Contact</Link>
        </span>

        <span id="buttons">
          <Link to="/curiosities">Curiosities</Link>
        </span>

        <span id="buttons">
          <Link to="/projects">Projects</Link>
        </span>

        <span id="buttons">
          <Link to="/workhistory">Work History</Link>
        </span>
      </div>
      <hr class="roundedLine"></hr>
    </>
  );
}

export default NavBarOne;
