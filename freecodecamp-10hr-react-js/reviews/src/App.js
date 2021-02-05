import React, { useState } from "react";
import Review from "./components/Review";

import data from "./data";

const App = () => {
  const [reviews, setReviews] = useState(data);
  const [current, setCurrent] = useState(0);

  const nextReview = () => {
    if (current === reviews.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const previusReview = () => {
    if (current === 0) {
      setCurrent(reviews.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const surpriseMe = () => {
    let surprise = Math.floor(Math.random() * reviews.length);
    while (surprise === current) {
      surprise = Math.floor(Math.random() * reviews.length);
    }
    setCurrent(surprise);
  };

  return (
    <main>
      <div className="title">
        <h1>Our Reviews</h1>
        <div className="underline"></div>
        <Review
          {...reviews[current]}
          nextReview={nextReview}
          previusReview={previusReview}
          surpriseMe={surpriseMe}
        ></Review>
      </div>
    </main>
  );
};

export default App;
