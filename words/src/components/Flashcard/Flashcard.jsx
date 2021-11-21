import React from "react";
import { useState } from "react";
import "./Flashcard.scss";

function Flashcard(props) {
  const [showTranslation, setShowTranslation] = useState(false);

  let handleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  let hideTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className="flashcardBody" draggable>
      <p className={`word_category`}>{props.category}</p>
      <p className={`word_french`}>{props.french}</p>
      <p className={`word_transcription`}>{props.transcription}</p>
      {showTranslation === true ? (
        <p onClick={hideTranslation} className={`word_french`}>
          {props.english}
        </p>
      ) : (
        <button
          className="word_translation translationBtn"
          onClick={handleTranslation}
        >
          Translation
        </button>
      )}
    </div>
  );
}

export default Flashcard;
