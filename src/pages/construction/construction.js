import React from "react";
import "./construction.css";
import "@fontsource/roboto-mono";

export default function Construction() {
  return (
    <div className="constructionPage">
      <div className="textContainer">
        <h1 className="constructionText" id="constructionTitle">
          portfolio in progress
        </h1>
        <h2 className="developerName" id="nameHeader">
          camerone Stoney
        </h2>
        <h3 className="textExplanation">
          developer / implementation engineer / woodworker / avid learner
        </h3>
        <a
          href="mailto:camjstoney@gmail.com?subject=Found your portfolio!"
          className="emailLink"
          id="directEmail"
          target="_blank"
          rel="noopener noreferrer"
        >
          get in touch
        </a>
      </div>
    </div>
  );
}
