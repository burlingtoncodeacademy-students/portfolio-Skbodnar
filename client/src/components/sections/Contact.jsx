import React from "react";
import "../../styles/main.css";
import headshot from "../../images/headshot.jpeg";
import git from "../../images/git.png";
import linkedIn_icon from "../../images/linkedIn_icon.png"

function Contact() {
  return (
    <>
      <div className="contact-section" id="contact">
        <p id="pageTitle">
          <pre>C ON T AC T.</pre>
        </p>
        <div className="ContentWrapper">
          <div className="profile">
            <img id="headshot" src={headshot} alt="headshot of Sophie"></img>

            <div className="contact-details">
              <a href="mailto:sophiekbodnar@gmail.com" id="email">
                sophiekbodnar@gmail.com
              </a>
            </div>
            <div className="inner-wrapper">
            <a href="https://github.com/Skbodnar">
              <img src={git} id="icon" />
            </a>
            <a href="https://www.linkedin.com/in/sophie-bodnar-8b7ba51a4/">
              <img src={linkedIn_icon} id="icon" />
            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
