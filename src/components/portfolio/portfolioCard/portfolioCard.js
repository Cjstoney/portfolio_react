import React from "react";
import "./portfolioCard.css";
import { GithubSVGOutlineComponent, FolderIconComponent } from "../../index";

function PortfolioCard({ className, card }) {
  return (
    <div className={className}>
      <FolderIconComponent className="folder-icon" />
      <a
        className="gh-outline"
        href={card.ghURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubSVGOutlineComponent />
      </a>
      <div className="proj-title">
        {card.projName}
        <div className="proj-description">{card.description}</div>
      </div>
      <div className="proj-tech">
        {card.technologies.map((tech, index) => {
          return (
            <div className="individual-tech" key={`tech-${index}`}>
              {tech.technology}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioCard;
