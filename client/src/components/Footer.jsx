import React from "react";
import git from "../images/git.png";
import linkedIn_icon from "../images/linkedIn_icon.png";
import "../styles/main.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <img src="https://github.com/Skbodnar" id="icon" src={git} />

        <img
          src="https://www.linkedin.com/in/sophie-bodnar-8b7ba51a4/"
          id="icon"
          src={linkedIn_icon}
        />
      </div>
    </>
  );
}

export default Footer;
