import React from "react";
import { useState } from "react";
import Waves from "../../parts/waves";
import Contact from "../contact/contact";
import "./about.css";
import bios from "../../bio.json";
import LengthPicker from "../lengthPicker/lengthPicker";

const About = () => {
  const [bioLength, changeLength] = useState("short");

  return (
    <div className="about-content">
      <h1 className="introduction">
        HI, I'M <br />
        CAMERONE
      </h1>
      <Waves />
      <div className="form-container">
        <LengthPicker
          bios={bios}
          changeLength={changeLength}
          bioLength={bioLength}
        />
      </div>
      {bios.map((bio, index) => {
        if (bio.length === bioLength) {
          return (
            <p key={index} id="bioId" className="bio ">
              {bio.bioText}
            </p>
          );
        }
        return null;
      })}

      <Contact />
    </div>
  );
};

export default About;
