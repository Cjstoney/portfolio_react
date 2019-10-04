import React from "react";
import './portfolioCard.css'


const PortfolioCard = (props) => {
    return (

        <div className="card-size-container">

            <img className="image" src={props.image} alt={props.name} />
            <div className='portfolio'>
                <p className="image_title">{props.name}</p>
                <p className="project-description">{props.description}</p>
                <a className="projects-a top-row" target='_blank' href={props.url}>
                    <div className=' button sitebtn'>See the project</div>
                </a>
                <a className="projects-a top-row" target='_blank' href={props.ghurl}>
                    <div className='button github'>See the code</div>
                </a>
            </div>
            <hr className='linebreak'></hr>
        </div>
    )
}

export default PortfolioCard;