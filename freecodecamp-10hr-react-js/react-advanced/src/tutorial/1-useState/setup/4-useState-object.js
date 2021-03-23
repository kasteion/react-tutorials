import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "Random Message",
  });

  const changeMessage = () => {
    if (person.message === "Random Message") {
      setPerson({
        ...person,
        age: person.age + 1,
        message: `Hello ${person.name}`,
      });
    } else {
      setPerson({ ...person, age: person.age + 1, message: "Random Message" });
    }
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
