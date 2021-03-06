import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <ul id="footerList" className="footerList">
      <li className="footerListItem">
        <a
          href="https://www.linkedin.com/in/cam-stoney"
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
          href="../assets/CameroneStoneyResume_word.pdf"
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
  );
};

export default Contact;
