import React from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = ({
  id,
  name,
  job,
  image,
  text,
  nextReview,
  previusReview,
  surpriseMe,
}) => {
  return (
    <section className="review-container">
      <span className="behind-image-container"></span>
      <div className="image-container">
        <img src={image}></img>
      </div>
      <span className="over-image-container">
        <FaQuoteRight />
      </span>
      <h4 className="review-name">{name}</h4>
      <p className="review-job">{job}</p>
      <p className="review-text">{text}</p>
      <div className="button-container">
        <button onClick={() => nextReview()}>
          <FaChevronLeft />
        </button>
        <button onClick={() => previusReview()}>
          <FaChevronRight />
        </button>
      </div>
      <button
        className="review-button"
        onClick={() => {
          surpriseMe();
        }}
      >
        Surprise Me
      </button>
    </section>
  );
};

export default Review;
