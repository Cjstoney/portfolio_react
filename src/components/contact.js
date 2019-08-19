import React from "react";

const Contact = () => {
    return(
        <div id="contact-content">
        <h1 className="section_header" id="contact">Contact</h1>
        <div className="row">
            <div className="col-xl-4">
                <a href="https://www.linkedin.com/in/camerone-stoney-b8a798177/">
                    <img id="linkedin_icon" className="contact-icon" src="assets/images/LI-In-Bug.png" />
                </a>
            </div>
            <div className="col-xl-4">
                <a href="https://github.com/Cjstoney">
                    <img id="github_icon" className="contact-icon" src="assets/images/GitHub-Mark-64px.png" />
                </a>
            </div>
            <div className="col-xl-4">
                <a href="assets/pdfs/document.pdf">
                    <img id="pdf_icon" className="contact-icon" src="assets/images/iconfinder_file-pdf_383140.png" />
                </a>
            </div>
        </div>
    </div>
    )
}

export default Contact;