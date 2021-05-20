import React from "react";
import "./lengthPicker.css";

const LengthPicker = ({ bios, changeLength, bioLength }) => {
  return (
    <form className="bio-length-form">
      <fieldset className="bio-fieldset">
        <legend>Select bio length:</legend>
        {bios.map((bio, index) => {
          return (
            <label key={index} className="control">
              <input
                type="radio"
                name="length"
                className="control-input visually-hidden "
                value={bio.length}
                onClick={() => changeLength(bio.length)}
                defaultChecked={bio.length === bioLength}
              ></input>
              <span className="control-indicator"></span>
              {index === 0 || index === bios.length - 1 ? bio.length : ""}{" "}
            </label>
          );
        })}
      </fieldset>
    </form>
  );
};
export default LengthPicker;
