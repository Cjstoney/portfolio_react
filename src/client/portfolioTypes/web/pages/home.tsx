import React from "react";
import "./home.css";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div id="landing-section">
      <Navbar />
      <figure id="thumbnail">
        <img
          id="woodsImage"
          alt="woods"
          src="../../images/woods2_copy.png"
        ></img>
      </figure>
      <div className="text-container">
        <p className="static-text">Hi, I'm Camerone</p>
      </div>
      <div id="overlay"></div>
    </div>
  );
};

export default Home;
