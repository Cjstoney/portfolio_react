import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <p className="section_header" id="contact">
        Contact
      </p>
      <div className="grid">
        <div className="contact-container">
          <div className="icons">
            <img
              id="linkedin_icon"
              className="contact-icon"
              src="../images/LI-In-Bug.png"
              alt="Linkedin Icon"
            />
            <a
              href="https://www.linkedin.com/in/camerone-stoney-b8a798177/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contactBtn">Connect With Me On LinkedIn</div>
            </a>
          </div>
          <div className="icons">
            <img
              id="github_icon"
              className="contact-icon"
              src="../images/GitHub-Mark-64px.png"
              alt="Github Icon"
            />
            <a
              href="https://github.com/Cjstoney"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <div className="contactBtn">Preview My Code</div>
            </a>
          </div>
          <div className="icons">
            <img
              id="pdf_icon"
              className="contact-icon"
              src="../images/iconfinder_file-pdf_383140.png"
              alt="PDF portfolio Icon"
            />
            <a
              href="../assets/Camerone_Stoney_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contactBtn">View My Resume</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
