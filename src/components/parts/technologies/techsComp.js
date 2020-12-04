import React from "react";
import "./techsComp.css";

const TechsComp = (props) => {
  return (
    <li className="list-item" key={props.technology} id={props.id}>
      <img className="techlogo" alt={props.technology} src={props.image} />
    </li>
  );
};
export default TechsComp;
