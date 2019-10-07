import React from "react";
import "./contact.css";

const Contact = () => {
    return(
        <div className="contact-page">
        <h1 className="section_header" id="contact">Contact</h1>
        <div className="grid">
        <div  className="contact-container">
            <div className="icons">
                {/* <a href="https://www.linkedin.com/in/camerone-stoney-b8a798177/"> */}
                    <img id="linkedin_icon" className="contact-icon" src="../images/LI-In-Bug.png" alt="Linkedin Icon" />
                {/* </a> */}
            <a  href="https://www.linkedin.com/in/camerone-stoney-b8a798177/" target="_blank" rel='noopener noreferrer'><div className='contactBtn' >Check out my LinkedIn here</div></a>
            </div>
            <div className="icons">
                    <img id="github_icon" className="contact-icon" src="../images/GitHub-Mark-64px.png" alt="Github Icon" />
                <a  href="https://github.com/Cjstoney" target="_blank" rel='noopener noreferrer'> <div className='contactBtn'>See some of my code here</div>
                </a>
            </div>
            <div className="icons">
                    <img id="pdf_icon" className="contact-icon" src="../images/iconfinder_file-pdf_383140.png" alt="PDF portfolio Icon" />
                <a  href="assets/pdfs/document.pdf" target="_blank" rel='noopener noreferrer'><div className='contactBtn'>Take a look at my resume here</div>
                </a>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Contact;