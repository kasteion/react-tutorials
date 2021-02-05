import React, { useState } from "react";

const TourCard = ({ id, name, info, image, price, dismissTour }) => {
  const [showLess, setShowLess] = useState(true);
  return (
    <>
      <img src={image}></img>
      <div className="tour-title">
        <h3 className="tour-name">{name}</h3>
        <h3 className="tour-price">$ {price}</h3>
      </div>
      <div className="tour-info">
        <p>
          {showLess ? `${info.substring(0, 200)}...` : info}{" "}
          <a onClick={() => setShowLess(!showLess)}>
            {showLess ? "Read More" : "Show Less"}
          </a>
        </p>
      </div>
      <div className="tour-card-button-container">
        <button onClick={() => dismissTour(id)}>Not Interested</button>
      </div>
    </>
  );
};

export default TourCard;
