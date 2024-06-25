import React from "react";
import "./question.css";
import arrowImg from "/icon-arrow-down.svg";

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

      <img
        className="arrow"
        src={arrowImg}
        alt="arrow icon"
        style={{
          transform: active === questionNumber ? "rotate(-180deg)" : "",
        }}
      />

      {active === questionNumber ? (
        <p className="answer"> {questionObj.answer}</p>
      ) : null}
    </div>
  );
}
