import React from "react";
import PortfolioCard from "../components/portfolioCard";
import cards from "../../../../jsonInfo/cards.json";
import "./portfolio.css";
import Navbar from "../components/navbar";

const Portfolio = () => {
  return (
    <div className="project-container container-fluid">
      <Navbar />
      <div className="row">
        <div id="portfolio-content">
          <p className="section_header" id="portfolio">
            Portfolio
          </p>
        </div>
        <div className="portfolio-map">
          {cards.map((data) => (
            <PortfolioCard
              id={data.id}
              key={data.id}
              name={data.projName}
              image={data.image}
              url={data.URL}
              ghurl={data.ghURL}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;