import { useState } from "react";
import "./App.css";
import Question from "./components/question/Question";
import questions from "./questions.json";
import patternMobile from "/bg-pattern-mobile.svg";
import womanImg from "/illustration-woman-online-mobile.svg";

function App() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="contaiener">
        <img className="womanImg" src={womanImg} alt="womanImg" />
        <img className="shadow" src={patternMobile} alt="pattern mobile img" />

        <h1>FAQ</h1>
        {questions.map((questionObj, index) => (
          <Question
            key={index}
            active={active}
            setActive={setActive}
            questionNumber={index + 1}
            questionObj={questionObj}
          />
        ))}
      </div>
    </>
  );
}

export default App;
