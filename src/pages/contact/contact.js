import React from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "./contact.css";

const Contact = () => {
  return (
    <footer id="contactFooter">
      <ul className="footerList">
        <li className="footerListItem">
          <a
            href="https://www.linkedin.com/in/camerone-stoney-b8a798177/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="contactImage"
              alt="LinkedIn"
              src="images/LI-In-Bug.png"
            />
          </a>
        </li>
        <li className="footerListItem">
          <a
            href="https://github.com/Cjstoney"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="contactImage"
              alt="Github"
              src="images/GitHub-Mark-64px.png"
            />
          </a>
        </li>
        <li className="footerListItem">
          <a
            href="../assets/Camerone_Stoney_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="contactImage"
              alt="Resume"
              src="images/iconfinder_file-pdf_383140.png"
            />
          </a>
        </li>
      </ul>
      <a href="#aboutSection" className="topOfPage">
        <KeyboardArrowUpIcon />
      </a>
    </footer>
  );
};

export default Contact;
