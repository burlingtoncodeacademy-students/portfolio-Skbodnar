import React from "react";
import "../../styles/main.css";
import NavBar from "../NavBar";
import MainTitle from "../MainTitle"



function Main() {
  return (
    <>
      <div className="main-section" id="main">
        <NavBar />
        <MainTitle />
      </div>
    </>
  );
}

export default Main;
