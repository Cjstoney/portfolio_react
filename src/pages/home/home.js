import React, { useEffect } from "react";
import About from "../../components/details/about/about";
import Technologies from "../technologies/technologies";
import Portfolio from "../portfolio/portfolio";
import Contact from "../contact/contact";
import "./home.css";

const Home = () => {
  useEffect(() => {
    let el = document.querySelector(".homePage");
    el.classList.add("fade-in");
  }, []);

  return (
    <>
      <div className="homePage">
        <About className="aboutSection" />
        <Technologies />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
};

export default Home;
