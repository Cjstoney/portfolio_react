import React from "react";
import "./about.css";

const About = () => {
    return (
        <div>
            <div className='title-section'>
                <h1 className="section_header" id="about">About</h1>
            </div>

            <div className='about-content'>

                <div >
                    <img className='about-img' id="cs-image" src="../images/IMG_1483 2.jpg" alt=" Camerone Stoney" />

                    <h2 className='bio' id="cs-text">I am Camerone Stoney. I moved from the San Francisco Bay Area to Portland,
                        Oregon in 2015.</h2>


                    <img className='about-img' id="sf-image" src="../images/IMG_1483 2.jpg" alt=" Camerone Stoney" />

                    <h2 className='bio' id="sf-text"> While in the
                     Bay Area I studied Fine Art with an emphasis in painting at The San Francisco Art
                        Institute.</h2>

                    <img className='about-img' id="dev-image" src="../images/IMG_1483 2.jpg" alt=" Camerone Stoney" />

                    <h2 className='bio' id="dev-text">After
                    moving to Portland, I worked for three years as a fine woodworker. I have since begun
                    working in web
                    development, using my art background to influence my aesthetic choices and my
                    woodworking production
                    knowledge to build websites from start to finish. </h2>
                </div>
            </div>
        </div>

    )
}

export default About;