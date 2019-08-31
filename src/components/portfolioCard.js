import React from "react";


const PortfolioCard = (props) => {
    return(
        
                <div className="col-xl-6">
                    <a className="projects-a top-row" href={props.url}>
                        <img src={props.image} alt={props.name}/>
                        <p className="image_title">{props.name}</p>
                    </a>
                </div>
    )
}

export default PortfolioCard;