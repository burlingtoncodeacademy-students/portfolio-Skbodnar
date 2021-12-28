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

       
      </div>
    

    </>
  );
}

export default NavBar;
