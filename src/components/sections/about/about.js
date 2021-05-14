import React from "react";
import { useState } from "react";
import Waves from "../../parts/waves";
import Contact from "../contact/contact";
import "./about.css";
import bios from "../../../bio.json";

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
        <form className="bio-length-form">
          <fieldset className="bio-fieldset">
            <legend>Select bio length</legend>
            {bios.map((bio) => {
              return (
                <span>
                  <input
                    type="radio"
                    name="length"
                    value={bio.length}
                    onClick={() => changeLength(bio.length)}
                  ></input>
                  <label for={`length-${bio.length}`}> {bio.length} </label>
                </span>
              );
            })}
          </fieldset>
        </form>
      </div>
      {bios.map((bio) => {
        if (bio.length === bioLength) {
          return (
            <p id="bioId" className="bio ">
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
