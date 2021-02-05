import React from "react";

import TourCard from "./TourCard";

const ToursList = ({ tours, dismissTour }) => {
  return (
    <>
      {tours.map((tour) => (
        <article key={tour.id} className="tour-card">
          <TourCard {...tour} dismissTour={dismissTour}></TourCard>
        </article>
      ))}
    </>
  );
};

export default ToursList;
