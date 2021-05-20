import React from "react";

const LengthPicker = ({ bios, changeLength }) => {
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
