import React, { useState } from "react";

import Question from "./Question";

import faqData from "./data";

const App = () => {
  const [questions, setQuestions] = useState(faqData);
  console.log(questions);
  return (
    <main>
      <section className="faq-container">
        <h1>Questions And Answers About Login</h1>
        {questions.map((question) => (
          <Question key={question.id} {...question}></Question>
        ))}
      </section>
    </main>
  );
};

export default App;
