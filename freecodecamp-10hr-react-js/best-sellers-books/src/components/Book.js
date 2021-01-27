import React from "react";

import cover001 from "./images/cover001.JPG";

const Book = () => {
  return (
    <div className="book-container">
      <div className="book-container-header">
        <svg>
          <polygon
            points="0,0 0,20 30,20 45,0"
            className="book-place"
          ></polygon>
        </svg>
        <p>#1</p>
      </div>
      <div className="bookcover-container">
        <img src={cover001} alt="A book cover"></img>
      </div>
      <a className="book-container-title" href="/">
        Change Sings: A Childen's Anthem
      </a>
      <ul className="book-container-author-list">
        <li>
          <a className="book-container-author" href="/">
            Amanda Gorman
          </a>
        </li>
      </ul>
      <p className="book-container-print">Hardcover</p>
      <p className="book-container-price">$14.08</p>
    </div>
  );
};

export default Book;
