import React from "react";
import "./Button.scss";

function Button(props) {
  return (
    <div className="button">
      <button className={`btn ${props.status}`}>
        I {props.status} this word
      </button>
    </div>
  );
}

export default Button;
