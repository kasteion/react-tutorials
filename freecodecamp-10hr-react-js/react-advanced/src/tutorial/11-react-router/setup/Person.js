import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const { id } = useParams();
  const [person, setPerson] = useState({ id: 0, name: "No Name" });

  useEffect(() => {
    const found = data.find((person) => person.id === parseInt(id));
    setPerson(found);
  }, []);

  return (
    <div>
      <h2>{person.name}</h2>
      <Link to="/people" className="btn">
        Back to People
      </Link>
    </div>
  );
};

export default Person;
