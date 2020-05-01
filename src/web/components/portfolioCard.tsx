import React from "react";
import "./portfolioCard.css";

const PortfolioCard = (props: any) => {
  return (
    <div className="card-size-container">
      <img className="image" src={props.image} alt={props.name} />
      <div className="portfolio">
        <p className="image_title">{props.name}</p>
        <p className="project-description">{props.description}</p>
        <a
          className="projects-a top-row"
          target="_blank"
          rel="noopener noreferrer"
          href={props.url}
        >
          <div className=" button sitebtn">See The Project</div>
        </a>
        <a
          className="projects-a top-row"
          target="_blank"
          rel="noopener noreferrer"
          href={props.ghurl}
        >
          <div className="button github">See The Code</div>
        </a>
      </div>
      <hr className="linebreak"></hr>
    </div>
  );
};

export default PortfolioCard;
