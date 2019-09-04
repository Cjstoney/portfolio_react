import React from "react";
import './portfolioCard.css'


const PortfolioCard = (props) => {
    return(
        
                <div className="card-size-container">
                    
                    <a className="projects-a top-row" href={props.url}>
                        <img className="image" src={props.image} alt={props.name}/>
                        <p className="image_title">{props.name}</p>
                    </a>
                        <p className="project-description">{props.description}</p>
                    
                </div>
    )
}

export default PortfolioCard;