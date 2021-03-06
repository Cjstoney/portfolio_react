import React, { useEffect } from "react";
import About from "../../components/sections/about/about";
import Contact from "../../components/sections/contact/contact";
import "./home.css";
import PortfolioCard from "../../components/parts/portfolioCard/portfolioCard";

const Home = () => {
  useEffect(() => {
    let el = document.querySelector(".homePage");
    el.classList.add("fade-in");
  }, []);

  return (
    <div className="homePage">
      <About className="aboutSection" />
      <PortfolioCard />
    </div>
  );
};

export default Home;
