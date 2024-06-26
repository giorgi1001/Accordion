import React from "react";
import "./illustration.css";
import patternMobile from "/bg-pattern-mobile.svg";
import womanImgMobile from "/illustration-woman-online-mobile.svg";
import patternDesktopImg from "/bg-pattern-desktop.svg";
import womanImgDesktop from "/illustration-woman-online-desktop.svg";
import boxImg from "/illustration-box-desktop.svg";

export default function Illustration() {
  return (
    <>
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
    </>
  );
}
