import React from "react";
import "./illustration.css";
import patternMobile from "/bg-pattern-mobile.svg";
import womanImgMobile from "/illustration-woman-online-mobile.svg";
import boxImg from "/illustration-box-desktop.svg";

export default function Illustration() {
  return (
    <>
      <img className="woman-mobile" src={womanImgMobile} alt="womanImg" />
      <img className="shadow" src={patternMobile} alt="pattern mobile img" />
      <img className="box-img" src={boxImg} alt="box Img" />
    </>
  );
}
