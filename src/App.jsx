import { useState } from "react";
import "./App.css";
import Question from "./components/question/Question";
import questions from "./questions.json";
import Illustration from "./components/illustration/Illustration";

function App() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="contaiener">
        <Illustration />
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
