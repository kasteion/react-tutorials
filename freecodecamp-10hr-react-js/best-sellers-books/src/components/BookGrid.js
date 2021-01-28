import React from "react";

import Book from "./Book";

import { bookList } from "./books";

const BookGrid = () => {
  return (
    <div className="bookgrid">
      {bookList.map((book) => (
        <Book key={book.ranking} {...book}></Book>
      ))}
    </div>
  );
};

export default BookGrid;
