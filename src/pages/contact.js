import React from "react";
import "./contact.css";

const Contact = () => {
    return(
        <div className="contact-page">
        <h1 className="section_header" id="contact">Contact</h1>
        <div  className="contact-container">
            <div className="icons">
                <a href="https://www.linkedin.com/in/camerone-stoney-b8a798177/">
                    <img id="linkedin_icon" className="contact-icon" src="../images/LI-In-Bug.png" alt="Linkedin Icon" />
                </a>
            </div>
            <div className="icons">
                <a href="https://github.com/Cjstoney">
                    <img id="github_icon" className="contact-icon" src="../images/GitHub-Mark-64px.png" alt="Github Icon" />
                </a>
            </div>
            <div className="icons">
                <a href="assets/pdfs/document.pdf">
                    <img id="pdf_icon" className="contact-icon" src="../images/iconfinder_file-pdf_383140.png" alt="PDF portfolio Icon" />
                </a>
            </div>
        </div>
    </div>
    )
}

export default Contact;