import React from "react";
import Main from "./sections/Main.jsx";
import About from "./sections/About.jsx"
import Contact from "./sections/Contact.jsx"
import Projects from "./sections/Projects.jsx"
import Workhistory from "./sections/Workhistory.jsx"



function Landing() {
  return (
    <div className="Landing">
      <Main />
      <About />
      <Workhistory />
      <Projects />
      <Contact />
  
  
    </div>
  );
}

export default Landing
