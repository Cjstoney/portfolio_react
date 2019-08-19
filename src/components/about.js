import React from "react";

const About = () => {
    return (
        <div className="container">
            <div id="about-me-content">
                <h1 className="section_header" id="about">About</h1>
                <div className="about-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4">
                                <img id="cs-image" src="assets/images/IMG_1483 2.jpg" alt="image of Camerone Stoney" />
                                <div className="col-xl-8">
                                    <h2 id="bio">I am Camerone Stoney. I moved from the San Francisco Bay Area to Portland,
                                        Oregon in 2015.
                                        While in the
                                        bay area I studied Fine Art with an emphasis in painting at The San Francisco Art
                                        Institute. After
                                        moving to Portland, I worked for three years as a fine woodworker. I have since begun
                                        working in web
                                        development, using my art background to influence my aesthetic choices and my
                                        woodworking production
                                knowledge to build websites from start to finish. </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;