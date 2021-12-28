import React from "react";
import Homepage from "./components/Homepage.jsx";
import NavBar from "./components/NavBar.jsx"
import About from "./components/sections/About.jsx"
import Contact from "./components/sections/Contact.jsx"
import Projects from "./components/sections/Projects.jsx"
import Workhistory from "./components/sections/Workhistory.jsx"
import Curiosities from "./components/sections/Curiosities.jsx";
// import {BrowserRouter, Routes, Route} from "react-router-dom"



function App() {
  return (
    <>
    <div className="Landing">
      <Homepage />
      <NavBar />
      <About />
      <Contact />
      <Projects />
      <Workhistory />
      <Curiosities />

    </div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/skb" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/curiosities" element={<Curiosities />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/workhistory" element={<Workhistory />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
