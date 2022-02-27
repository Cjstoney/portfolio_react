import React, { useEffect } from "react";
import About from "../../components/about/about";
import "./home.css";
import PortfolioCard from "../../components/portfolioCard/portfolioCard";

const Home = () => {
  return (
    <div className="homePage">
      <About className="aboutSection" />
      {/* <PortfolioCard /> */}
    </div>
  );
};

export default Home;
