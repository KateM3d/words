import React from "react";
import "./Flashcard.scss";

function Flashcard(props) {
  return (
    <div className="flashcardBody" draggable>
      <p className={`word_category`}>{props.category}</p>
      <p className={`word_french`}>{props.french}</p>
      <p className={`word_transcription`}>{props.transcription}</p>
    </div>
  );
}

export default Flashcard;
