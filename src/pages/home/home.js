import React, { useEffect } from "react";
import About from "../../components/sections/about/about";
import Technologies from "../../components/sections/technologies/technologies";
import Portfolio from "../../components/sections/portfolio/portfolio";
import Contact from "../../components/sections/contact/contact";
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
        {/* <Technologies /> */}
        <Portfolio />
        <Contact />
      </div>
    </>
  );
};

export default Home;
