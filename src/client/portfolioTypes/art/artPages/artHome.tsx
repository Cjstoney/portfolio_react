import React from "react";
import paintingObjs from "../../../../jsonInfo/artInfo/paintingObjs.json";
import ArtCard from "../artComponents/artCard";

class ArtHome extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div className="sideBar-container"></div>
        <div className="content-conatiner">
          {paintingObjs.map((obj) => (
            <ArtCard
              id={obj.id}
              key={obj.id}
              name={obj.name}
              description={obj.description}
              imgURL={obj.imgURL}
              size={obj.size}
              year={obj.year}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ArtHome;
