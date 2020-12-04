import React from "react";
import PortfolioCard from "../../components/parts/portfolioCard/portfolioCard";
import cards from "../../cards.json";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div id="row">
      <p className="section_header" id="portfolio">
        Some of my work
      </p>
      <ul className="portfolio-map">
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
      </ul>
    </div>
  );
};

export default Portfolio;
