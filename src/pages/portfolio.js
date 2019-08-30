import React from "react";

const Portfolio = () => {
    return(            
    <div class="project-container container-fluid">
        <div calss="row">
            <div id="portfolio-content">
                <h1 class="section_header" id="portfolio">Portfolio</h1>
            </div>
            <div class="row">
                <div class="col-xl-6">
                    <a class="projects-a top-row" href="https://cjstoney.github.io/phychic_letter_game/">
                        <img src="assets/images/psych_game.png" alt="psychic guessing game" />
                        <p class="image_title">Psychic Guessing Game</p>
                    </a>
                </div>

                <div class="col-xl-6">
                    <a class="projects-a top-row" href="https://cjstoney.github.io/crystal_collector_game/">
                        <img src="assets/images/crystal_collectors.png" alt="road trip website" />
                        <p class="image_title">Crystal Collector Game</p>
                    </a>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <a class="projects-a" href="https://volksrat71.github.io/project-1/project-1/index.html">
                            <img src="assets/images/roadtriperzzz.png" alt="road trip website" />
                            <p class="image_title">RoadtriperZzz</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Portfolio;