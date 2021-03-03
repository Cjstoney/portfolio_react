import React from "react";
import "./portfolioCard.css";

const PortfolioCard = (props) => {
  return (
    <li className="portfolio-card">
      <div className="backgroundDiv"></div>
      <a
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
        href={props.url}
      >
        <img className="image" src={props.mockup} alt={props.name} />
        <div className="description">
          <h1>{props.name}</h1>
          <p className="applicationDescription">{props.description}</p>
        </div>
      </a>
    </li>
  );
};

export default PortfolioCard;
