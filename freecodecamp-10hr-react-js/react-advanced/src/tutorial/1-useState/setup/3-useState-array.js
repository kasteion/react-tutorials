import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (index) => {
    setPeople(people.filter((person) => person.id !== index));
  };

  const removeAllItems = () => {
    setPeople([]);
  };

  return (
    <>
      {people.map((person) => (
        <div className="item" key={person.id}>
          <h4>{person.name}</h4>
          <button
            onClick={() => {
              removeItem(person.id);
            }}
          >
            Remove Item
          </button>
        </div>
      ))}
      <button className="btn" onClick={removeAllItems}>
        Remove All People
      </button>
    </>
  );
};

export default UseStateArray;
