import React from "react";
import "./portfolioSection.css";
import cards from "../../../cards.json";
import { SectionHeaderComponent, PortfolioCardComponent } from "../../index";
const PortfolioSection = ({ className }) => {
  return (
    <div className={className}>
      <SectionHeaderComponent
        className="portfolio-header"
        headerText="Projects"
      />
      <div className="cards-container">
        {cards.reverse().map((card, index) => {
          return (
            <PortfolioCardComponent
              className="portfolio-card"
              index={index}
              card={card}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioSection;