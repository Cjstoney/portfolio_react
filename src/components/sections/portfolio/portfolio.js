import React from "react";
import PortfolioCard from "../../parts/portfolioCard/portfolioCard";
import cards from "../../../cards.json";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div id="portfolioSection">
      <p className="section_header" id="portfolio">
        Projects I have <span id="portfolioVerb"></span>
      </p>
      <ul id="portfolio-map">
        {cards.map((data) => (
          <PortfolioCard
            id={data.id}
            key={data.id}
            name={data.projName}
            image={data.image}
            mockup={data.mockup}
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
