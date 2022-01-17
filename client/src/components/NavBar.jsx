import React from "react";
import "../styles/main.css";
import { Link, animateScroll as scroll } from "react-scroll";


function NavBar() {
  return (
    <>
      <div className="navBar-left">
        <Link
          activeClass="active"
          id="buttons"
          to="main"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Top.
        </Link>

        <Link
          activeClass="active"
          id="buttons"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About.
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
          Experience.
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
          Projects.
        </Link>

        <Link
          activeClass="active"
          id="buttons"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact.
        </Link>
      </div>

      
    </>
  );
}

export default NavBar;
