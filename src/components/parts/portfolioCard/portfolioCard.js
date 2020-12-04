import React from "react";
import "./portfolioCard.css";

const PortfolioCard = (props) => {
  return (
    <li className="portfolio">
      <a
        className="projects-image top-row"
        target="_blank"
        rel="noopener noreferrer"
        href={props.url}
      >
        <img className="image" src={props.image} alt={props.name} />
      </a>
      <a
        className="projects-a top-row"
        target="_blank"
        rel="noopener noreferrer"
        href={props.ghurl}
      >
        <div className="button github">Code</div>
      </a>
    </li>
  );
};

export default PortfolioCard;
