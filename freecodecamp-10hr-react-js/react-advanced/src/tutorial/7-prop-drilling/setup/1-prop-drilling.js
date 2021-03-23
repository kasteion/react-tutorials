import React, { useState } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const deletePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <>
      <h2>prop drilling</h2>
      <List people={people} deletePerson={deletePerson}></List>
    </>
  );
};

const List = ({ people, deletePerson }) => {
  return (
    <>
      {people.map((person) => (
        <Person
          {...person}
          key={person.id}
          deletePerson={deletePerson}
        ></Person>
      ))}
    </>
  );
};

const Person = ({ id, name, deletePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => deletePerson(id)}>Delete</button>
    </div>
  );
};

export default PropDrilling;
