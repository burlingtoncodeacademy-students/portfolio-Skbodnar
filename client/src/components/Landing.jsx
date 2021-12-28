import React from "react";
import Homepage from "./Homepage.jsx";
import About from "./sections/About.jsx"
import Contact from "./sections/Contact.jsx"
import Projects from "./sections/Projects.jsx"
import Workhistory from "./sections/Workhistory.jsx"
import Curiosities from "./sections/Curiosities.jsx";

function Landing() {
  return (
    <div className="Landing">
      <Homepage />
      <About />
      <Contact />
      <Projects />
      <Workhistory />
      <Curiosities />
    </div>
  );
}

export default Landing
