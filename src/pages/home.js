import React from "react";
import './home.css';

const Home = () => {
    return (
        <div id="landing-section">
            <figure id='thumbnail'>
                <img id='woodsImage' alt='woods' src='../../images/woods2_copy.png'></img>
            </figure>
            <div className="text-container">
                <p className="static-text">Hi, I'm Camerone</p>
            </div>
            <div id='overlay'></div>
            <hr></hr>
        </div>

    )
}

export default Home;