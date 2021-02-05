import React, { useState, useEffect } from "react";

import ToursList from "./components/ToursList";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    const result = await fetch("https://course-api.com/react-tours-project");
    const data = await result.json();
    setTours(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const dismissTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      <section>
        <div className="title">
          {loading ? <h1>Loading...</h1> : <h1>Our Tours</h1>}
          <div className="underline"></div>
        </div>
        <div className="tour-container">
          <ToursList tours={tours} dismissTour={dismissTour}></ToursList>
        </div>
      </section>
    </main>
  );
};

export default App;
