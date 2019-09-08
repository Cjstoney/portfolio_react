import React from "react";
import "./about.css";

const About = () => {
    return (
        <div>
            <div className='title-section'>
            <h1 className="section_header" id="about">About</h1>
            </div>

            <div className='about-content'>

                <img id="cs-image" src="../images/IMG_1483 2.jpg" alt=" Camerone Stoney" />
                <div >
                    <h2 id="bio">I am Camerone Stoney. I moved from the San Francisco Bay Area to Portland,
                        Oregon in 2015.
                        While in the
                        bay area I studied Fine Art with an emphasis in painting at The San Francisco Art
                        Institute. After
                        moving to Portland, I worked for three years as a fine woodworker. I have since begun
                        working in web
                        development, using my art background to influence my aesthetic choices and my
                        woodworking production
                    knowledge to build websites <br></br> from start to finish. </h2>
                </div>
            </div>
        </div>

    )
}

export default About;