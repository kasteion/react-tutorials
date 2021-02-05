import React, { useState } from "react";

import { birthdays } from "../birthdays";

const BirthdayList = () => {
  const [count, setCount] = useState(birthdays.length);
  const [people, setPeople] = useState(birthdays);

  const clearAll = () => {
    setPeople([]);
    setCount(0);
  };

  return (
    <section className="list-container">
      <h3>{count} birthdays today</h3>
      {people.map((person) => {
        return (
          <article className="person-card">
            <img src={person.image.url}></img>
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
          </article>
        );
      })}
      <button className="btn" onClick={() => clearAll()}>
        Clear All
      </button>
    </section>
  );
};

export default BirthdayList;
