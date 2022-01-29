import React from "react";
import "../styles/main.css";
import { Link, animateScroll as scroll } from "react-scroll";
import resume from "../images/resume.pdf";

function NavBar() {
  return (
    <>
      <div className="navBar-left">
        <Link
          activeClass="active"
          id="nav-name"
          to="main"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Sophie Bodnar
        </Link>
      </div>

      <div className="navBar-right">
        <Link
          activeClass="active"
          id="buttons"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About Me 
        </Link>

        <Link
          activeClass="active"
          id="buttons"
          to="workhistory"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Experience 
        </Link>

        <Link
          activeClass="active"
          id="buttons"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Projects
        </Link>

        <a href={resume} id="buttons">
          Resume
        </a>

        <Link
          activeClass="active"
          id="contact-button"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact
        </Link>
      </div>
    </>
  );
}

export default NavBar;
