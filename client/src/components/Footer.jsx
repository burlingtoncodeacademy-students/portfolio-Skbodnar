import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import git from "../images/git.png";
import linkedIn_icon from "../images/linkedIn_icon.png";
import "../styles/main.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <a href="https://github.com/Skbodnar" >
          <img src={git} id="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sophie-bodnar-8b7ba51a4/"
         
        >
          <img src={linkedIn_icon}  id="icon" />
        </a>
      </div>
    </>
  );
}

export default Footer;
