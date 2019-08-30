import React from "react";

const Portfolio = (props) => {
    return(            
    <div className="project-container container-fluid">
        <div className="row">
            <div id="portfolio-content">
                <h1 className="section_header" id="portfolio">Portfolio</h1>
            </div>
            <div className="row">
                <div className="col-xl-6">
                    <a className="projects-a top-row" href={props.url}>
                        <img src={props.image} alt={props.name}/>
                        <p className="image_title">{props.name}</p>
                    </a>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Portfolio;