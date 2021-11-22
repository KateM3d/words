import React from "react";
import "./WelcomingNote.scss";
import welcome from "./welcome.jpg";
import arrow from "./arrow.png";
import { gsap } from "gsap";
import { useEffect } from "react";
import { useRef } from "react";

function WelcomingNote() {
  const imgRef = useRef();

  useEffect(() => {
    gsap.to(imgRef.current, {
      duration: 1.4,
      repeat: -1,
      y: 25,
    });
  });
  return (
    <div className="welcome">
      <div className="welcomePage">
        <img className="welcomeImage" src={welcome} alt="welcome" />
        <div className="welcomeMessage">
          <h1 className="welcomeMessageText">Welcome to your jorney!</h1>
          <h3 className="welcomeMessageText">The easy way to learn French</h3>
          <h3 className="welcomeMessageText">
            Please choose one of the categories and start learinig right now!
          </h3>
        </div>
      </div>
      <div>
        <img className="welcomeArrow" ref={imgRef} src={arrow} alt="arrow" />
      </div>
    </div>
  );
}

export default WelcomingNote;
