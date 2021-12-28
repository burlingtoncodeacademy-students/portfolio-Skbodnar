import React from "react";
import "../styles/main.css";
// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar() {
  return (
    <>
      <div className="navBar">
        <Link
          activeClass="active"
          id="buttons"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About
        </Link>

        <Link
          activeClass="active"
          id="buttons"
          to="contact"
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact
        </Link>

        <Link
          activeClass="active"
          id="buttons"
          to="curiosities"
          smooth={true}
          offset={0}
          duration={500}
        >
          Curiosities
        </Link>

        <Link
          activeClass="active"
          id="buttons"
          to="projects"
          smooth={true}
          offset={0}
          duration={500}
        >
          Projects
        </Link>

        <Link
          activeClass="active"
          id="buttons"
          to="workhistory"
          smooth={true}
          offset={0}
          duration={500}
        >
          Work History
        </Link>

        <hr class="roundedLine"></hr>
      </div>

      {/* <span className="pageTitle"></span>
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
      <hr class="roundedLine"></hr> */}
    </>
  );
}

export default NavBar;
