import React from "react";
import { Link } from "react-router-dom";

import "./about.css";

const About = () => {
    return (
        <div>
            <div className='title-section'>
                <h1 className="section_header" id="about">About</h1>
            </div>

            <div className='about-content'>

                <img className='about-img bio' id="cs-image" src="../images/IMG_1483 2.jpg" alt=" Camerone Stoney" />

                <h2 className='bio bio-text' id="cs-text">I am Camerone Stoney. I moved from the San Francisco Bay Area to Portland,
                        Oregon in 2015.</h2>


                <h2 className='bio bio-text' id="sf-text"> While in the
                 Bay Area I studied Fine Art with an emphasis in painting at The San Francisco Art
                        Institute.</h2>
                <img className='about-img bio' id="sf-image" src="../images/bay_area.png" alt=" Camerone Stoney" />

                <img className='about-img bio' id="dev-image" src="../images/portland.png" alt=" Camerone Stoney" />

                <h2 className='bio bio-text' id="dev-text">After
                moving to Portland, I worked for three years as a fine woodworker. I have since begun
                working in web
                development, using my art background to influence my aesthetic choices and my
                woodworking production
                    knowledge to build websites from start to finish. </h2>
            </div>
            <hr className='break'></hr>
            <div className='forLink'>
                <Link to='/Portfolio' className='route' >Projects</Link>
            </div>
        </div>

    )
}

export default About;