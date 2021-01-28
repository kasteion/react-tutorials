import React from "react";

import Book from "./Book";

const bookList = [
  {
    ranking: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91wRcPETM0L._AC_UL200_SR200,200_.jpg",
    title: "Change Sings: A Children's Anthem",
    author: "Amanda Gorman",
    bookPrint: "Hardcover",
    price: 14.08,
  },
  {
    ranking: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/7196WwHcD4L._AC_UL200_SR200,200_.jpg",
    title: "The Hill We Climb and Other Poems",
    author: "Amanda Gorman",
    bookPrint: "Hardcover",
    price: 14.56,
  },
  {
    ranking: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg",
    title: "Athomic Habits: An Easy & Proven Way to Build...",
    author: "James Clear",
    bookPrint: "Hardcover",
    price: 11.98,
  },
  {
    ranking: 4,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91rmiEH%2BBHL._AC_UL200_SR200,200_.jpg",
    title: "The Hill We Climb: An Inaugural Poem for the...",
    author: "Amanda Gorman",
    bookPrint: "Hardcover",
    price: 12.25,
  },
  {
    ranking: 5,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91NKthYHyZL._AC_UL200_SR200,200_.jpg",
    title: "The Four Winds: A Novel",
    author: "Kristin Hannah",
    bookPrint: "Hardcover",
    price: 18.06,
  },
  {
    ranking: 6,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/7184Pp9Y-oL._AC_UL200_SR200,200_.jpg",
    title: "Keep Sharp: Build a Better Brain at Any Age",
    author: "Sanjay Gupta M.D.",
    bookPrint: "Hardcover",
    price: 16.88,
  },
];

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
