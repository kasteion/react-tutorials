import React from "react";

const Book = (props) => {
  return (
    <div className="book-container">
      <div className="book-container-header">
        <svg>
          <polygon
            points="0,0 0,20 30,20 45,0"
            className="book-place"
          ></polygon>
        </svg>
        <p>#{props.ranking}</p>
      </div>
      <div className="bookcover-container">
        <img src={props.img} alt="A book cover"></img>
      </div>
      <a className="book-container-title" href="/">
        {props.title}
      </a>
      <ul className="book-container-author-list">
        <li>
          <a className="book-container-author" href="/">
            {props.author}
          </a>
        </li>
      </ul>
      <p className="book-container-print">{props.bookPrint}</p>
      <p className="book-container-price">${props.price}</p>
    </div>
  );
};

export default Book;
