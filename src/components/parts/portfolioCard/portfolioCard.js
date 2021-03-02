import React from "react";
import "./portfolioCard.css";

const PortfolioCard = (props) => {
  return (
    <li className="portfolio-card">
      <a
        className="projects-image top-row"
        target="_blank"
        rel="noopener noreferrer"
        href={props.url}
      >
        <img className="image" src={props.mockup} alt={props.name} />
      </a>
    </li>
  );
};

export default PortfolioCard;
