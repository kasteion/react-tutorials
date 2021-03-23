import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // let pArray = people;
    // pArray.push({
    //   id: pArray.length + 1,
    //   firstName: firstName,
    //   email: email,
    // });
    // setPeople(pArray);
    const person = { id: people.length + 1, firstName, email };
    console.log(person);
    setPeople((people) => {
      return [...people, person];
    });
    setFirstName("");
    setEmail("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
            ></input>
          </div>
          <button type="submit">Add Person</button>
        </form>
        {people.map((person) => (
          <div key={person.id} className="item">
            <h4>{person.firstName}</h4>
            <p>{person.email}</p>
          </div>
        ))}
      </article>
    </>
  );
};

export default ControlledInputs;
