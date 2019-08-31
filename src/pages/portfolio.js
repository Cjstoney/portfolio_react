import React from "react";
import PortfolioCard from "../components/portfolioCard";
import cards from "../cards.json"

const Portfolio = () => {
    return (
        <div className="project-container container-fluid">
            <div className="row">
                <div id="portfolio-content">
                    <h1 className="section_header" id="portfolio">Portfolio</h1>
                </div>
                {
                cards.map(data => (
                    <PortfolioCard
                    id={data.id}
                    key={data.id}
                    name={data.projName}
                    image={data.image}
                />
                ))
                }
        
            </div>
        </div>
    
    
    )
}

export default Portfolio;