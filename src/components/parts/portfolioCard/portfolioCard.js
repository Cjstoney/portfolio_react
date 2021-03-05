import React from "react";
import "./portfolioCard.css";
import cards from "../../../cards.json";

const PortfolioCard = () => {
  return cards.reverse().map((card) => {
    return (
      <li className="portfolio-card">
        <div className="backgroundDiv"></div>
        <a
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
          href={card.url}
        >
          <img className="image" src={card.mockup} alt={card.name} />
          <div className="description">
            <h1>{card.name}</h1>
            <p className="applicationDescription">{card.description}</p>
            <ul className="technologies">
              {card.technologies.map((tech) => (
                <li
                  className={`${card.name}-${tech.technology} technologyListItem`}
                >
                  <img
                    className="techlogo"
                    src={tech.techImage}
                    alt={`${tech.technology} icon`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </a>
      </li>
    );
  });
};

export default PortfolioCard;
