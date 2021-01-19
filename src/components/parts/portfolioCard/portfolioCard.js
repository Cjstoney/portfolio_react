import React from "react";
import "./portfolioCard.css";

const PortfolioCard = (props) => {
  return (
    <li className="portfolio-card">
      <img className="image" src={props.image} />
      <h2 className="text">{props.name}</h2>
    </li>
  );
};

export default PortfolioCard;
