import React from "react";

const ArtCard = (props: ArtCardProps) => {
  return (
    <div className="artCard-container">
      <img className="artCard-image" src={props.imgURL} alt={props.name} />
      <div className="image-info">
        <p className="image-name">{props.name}</p>
        <p className="image-size">{props.size}</p>
        <p className="image-year">{props.year}</p>
        <p className="image-description">{props.description}</p>
      </div>
    </div>
  );
};

interface ArtCardProps {
  id: string;
  name: string;
  description: string;
  size: string;
  year: string;
  imgURL: string;
}

export default ArtCard;
