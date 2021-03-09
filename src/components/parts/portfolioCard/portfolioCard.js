import React from "react";
import "./portfolioCard.css";
import cards from "../../../cards.json";

const PortfolioCard = () => {
  return (
    <ul className="listContainer">
      {cards.reverse().map((card, index) => {
        return (
          <li className="portfolio-card" key={index}>
            <div className="backgroundDiv"></div>
            <a
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
              href={card.url}
            >
              <img className="image" src={card.mockup} alt={card.projName} />
              <div className="description">
                <h1 className="projectName">{card.projName}</h1>
                <p className="applicationDescription">{card.description}</p>
                <ul className="technologies">
                  {card.technologies.map((tech, index) => (
                    <li
                      className={`${card.projName}-${tech.technology} technologyListItem`}
                      key={`${tech}::${index}`}
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
      })}
    </ul>
  );
};

export default PortfolioCard;
