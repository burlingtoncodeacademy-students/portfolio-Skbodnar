import React from "react";
import "../../styles/main.css";
import headshot from "../../images/headshot.jpeg";

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
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
