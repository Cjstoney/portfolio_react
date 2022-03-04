import React from "react";

function PortfolioCard({ className, index, card }) {
  return (
    <div className={className} key={index}>
      testing {card.id}
    </div>
  );
}

export default PortfolioCard;
