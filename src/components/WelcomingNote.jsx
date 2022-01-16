import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import welcome from "../assets/welcome.jpg";
import arrow from "../assets/arrow.png";

export default function WelcomingNote() {
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
            You will learn words from all different categories.
          </h3>
          <h3 className="welcomeMessageText">Start learning right now!</h3>
        </div>
      </div>
      <div>
        <img className="welcomeArrow" ref={imgRef} src={arrow} alt="arrow" />
      </div>
    </div>
  );
}
