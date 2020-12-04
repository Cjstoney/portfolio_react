import React, { useEffect } from "react";
import About from "../../components/details/about/about";
import Technologies from "../technologies/technologies";
import "./home.css";

const Home = () => {
  useEffect(() => {
    let el = document.querySelector(".homePage");
    el.classList.add("fade-in");
  }, []);

  return (
    <>
      <div className="homePage">
        <div id="landing-section">
          <div className="text-container">
            <p className="static-text">Hi, I'm Camerone</p>
          </div>
        </div>
        <About className="aboutSection" />
        <Technologies />
      </div>
    </>
  );
};

export default Home;
