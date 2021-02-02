import React from "react";
import techCards from "../../../techcards.json";
import TechsComp from "../../parts/technologies/techsComp";
import "./technologies.css";

export const Technologies = () => {
  return (
    <div id="technologySection">
      <p className="tech-header">
        Tech I am <br /> <span id="techVerb"></span>
      </p>
      <ul className="proficiencies">
        {techCards.map((data) => (
          <TechsComp
            id={data.id}
            image={data.image}
            technology={data.technology}
            key={data.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Technologies;
