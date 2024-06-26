import { useState } from "react";
import "./App.css";
import Question from "./components/question/Question";
import questions from "./questions.json";
import patternMobile from "/bg-pattern-mobile.svg";
import womanImgMobile from "/illustration-woman-online-mobile.svg";
import patternDesktopImg from "/bg-pattern-desktop.svg";
import womanImgDesktop from "/illustration-woman-online-desktop.svg";
import boxImg from "/illustration-box-desktop.svg";

function App() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="contaiener">
        <img className="woman-mobile" src={womanImgMobile} alt="womanImg" />
        <img className="shadow" src={patternMobile} alt="pattern mobile img" />
        <img
          className="woman-desktop"
          src={womanImgDesktop}
          alt="woman Img Desktop"
        />
        <img
          className="desktop-shadow"
          src={patternDesktopImg}
          alt="pattern Desktop Img"
        />
        <img className="box-img" src={boxImg} alt="box Img" />

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
