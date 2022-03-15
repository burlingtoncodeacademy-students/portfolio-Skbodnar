import React from "react";
import { useState, useRef, useEffect } from "react";
import "../styles/main.css";
import { Link, animateScroll as scroll } from "react-scroll";
import resume from "../images/resume.pdf";

function NavBar() {
  const dropDownRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  function handleDropDown() {
    setIsActive(!isActive);
    console.log("clicked on menu dropdown", !isActive);
  }

  useEffect(() => {
    const pageClickHandler = (event) => {
      if (!dropDownRef.current.contains(event.target)) {
        handleDropDown();
      }
    };
    if (isActive) {
      window.addEventListener("click", pageClickHandler);
    }
    return () => {
      window.removeEventListener("click", pageClickHandler);
      console.log("event listener has been removed");
    };
  }, [isActive]);

  return (
    <>
      <div className="navBar-wrapper">
        <div className="navBar-left">
          <div className="menu-container" onClick={handleDropDown}>
            <div className="menu-icon"></div>
            <div className="menu-icon"></div>
            <div className="menu-icon"></div>

            <nav
              ref={dropDownRef}
              className={`menu ${isActive ? "active" : "inactive"}`}
            >
              <ul className="dropdown-list">
                <li className="list-items">
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    About Me
                    {console.log("in the dropdown")}
                  </Link>
                </li>
                <li className="list-items">
                  <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Projects
                  </Link>
                </li>
                <li className="list-items">
                  <a href={resume}>Resume</a>
                </li>
                <li className="list-items">
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
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

        {/* <div className="navBar-right">
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
        </div> */}
      </div>
    </>
  );
}

export default NavBar;
