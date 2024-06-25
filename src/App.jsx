import { useState } from "react";
import "./App.css";
import Question from "./components/question/Question";
import questions from "./questions.json";

function App() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="contaiener">
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
