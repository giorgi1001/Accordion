import React from "react";
import "./question.css";

export default function Question({
  active,
  setActive,
  questionNumber,
  questionObj,
}) {
  return (
    <div className="question-div">
      <p
        className="question"
        onClick={() => {
          if (active === questionNumber) {
            setActive(null);
          } else {
            setActive(questionNumber);
          }
        }}
      >
        {questionObj.question}
      </p>
      {active === questionNumber ? (
        <p className="answer">Answer {questionObj.answer}</p>
      ) : null}
    </div>
  );
}
