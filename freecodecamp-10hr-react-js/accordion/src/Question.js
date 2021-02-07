import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Question = ({ title, info }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article className="question">
      <div className="question-title-container">
        <h2>{title}</h2>
        <button className="btn-more" onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {showAnswer && <p>{info}</p>}
    </article>
  );
};

export default Question;
