import React from "react";
import "../Flashcard/Flashcard.scss";
import "./ExerciseCard.scss";
import rightArrow from "./right-arrow.png";

function ExerciseCard(props) {
  return (
    <div className="flashcardBody">
      <p className="exerciseType">{props.type}</p>
      <div className="exerciseTypeImageContainer">
        <img
          className="exerciseTypeImage"
          src={props.typeImageOne}
          alt={props.type}
        />
        <img
          className="exerciseTypeImageArrow"
          src={rightArrow}
          alt={props.type}
        />
        <img
          className="exerciseTypeImage"
          src={props.typeImageTwo}
          alt={props.type}
        />
      </div>
    </div>
  );
}

export default ExerciseCard;
