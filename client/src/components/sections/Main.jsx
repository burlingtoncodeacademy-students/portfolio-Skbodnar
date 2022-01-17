import React from "react";
import "../../styles/main.css";
import NavBar from "../NavBar";
import MainTitle from "../MainTitle"
import Footer from "../Footer"

function Main() {
  return (
    <>
      <div className="main-section" id="main">
        <NavBar />
        <MainTitle />
        <Footer />
        

       
      </div>
    </>
  );
}

export default Main;
