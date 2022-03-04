import React from "react";
import "./portfolioCard.css";
import { GithubSVGOutlineComponent, FolderIconComponent } from "../../index";

function PortfolioCard({ className, index, card }) {
  return (
    <div className={className} key={index}>
      <FolderIconComponent className="folder-icon" />
      <GithubSVGOutlineComponent className="gh-outline" />
      <div className="proj-title">
        {card.projName}
        <div className="proj-description">{card.description}</div>
      </div>
    </div>
  );
}

export default PortfolioCard;
