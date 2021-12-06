import React from "react";
import "./Button.scss";

function Button(props) {
  return (
    <div className="button">
      <button className={`btn`}>
        I {props.status === "know" ? "" : "don't"} know this word
      </button>
    </div>
  );
}

export default Button;
