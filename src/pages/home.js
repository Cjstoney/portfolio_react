import React from "react";
import './home.css';

const Home = () => {
    return (
        <div id="landing-section">
            <div className="text-container">
            <p className="static-text">Hi, I'm</p>
            <ul className="dynamic-text">
                <li className="item">Camerone Stoney </li>
                <li className="item">a web developer</li>
                {/* <li className="item">UX/UI desiger</li>
                <li className="item">content creator</li>
                <li className="item">professor</li> */}
            </ul>
        </div>
        </div>

    )
}

export default Home;