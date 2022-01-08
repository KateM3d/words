import React from "react";
import "../Flashcard/Flashcard.scss";
import "./ExerciseCard.scss";
import rightArrow from "./right-arrow.png";
import english from "./english.png";
import french from "./french.png";

const exerciseTypes = [
  // {
  //   key: 31,
  //   type: "English TO French",
  //   typeImageOne: english,
  //   typeImageTwo: french,
  // },
  {
    key: 32,
    type: "French TO English",
    typeImageOne: french,
    typeImageTwo: english,
  },
];

function ExerciseCard() {
  return (
    <>
      {exerciseTypes.map((ex) => (
        <div key={ex.key} className="flashcardBody">
          <p className="exerciseType">{ex.type}</p>
          <div className="exerciseTypeImageContainer">
            <img
              className="exerciseTypeImage"
              src={ex.typeImageOne}
              alt={ex.type}
            />
            <img
              className="exerciseTypeImageArrow"
              src={rightArrow}
              alt={ex.type}
            />
            <img
              className="exerciseTypeImage"
              src={ex.typeImageTwo}
              alt={ex.type}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default ExerciseCard;
