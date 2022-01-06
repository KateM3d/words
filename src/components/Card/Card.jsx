import React, { useState, useRef, useEffect } from "react";

export default function Card(props) {
  const [showTranslation, setShowTranslation] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    btnRef.current && btnRef.current.focus();
  }, []);

  function handleTranslationClick() {
    if (!showTranslation) {
      props.onClick();
    }
    setShowTranslation(!showTranslation);
    console.log(props.russian);
  }

  return (
    <div className="containerCards">
      <div className="flashcardBody">
        <p className="word_category">{props.tags}</p>
        <p className="word_french">{props.russian}</p>
        <p className="word_transcription">{props.transcription}</p>
        <p
          ref={btnRef}
          className={`word_french ${!showTranslation && "translationBtn"}`}
          onClick={handleTranslationClick}
          tabIndex={0}
        >
          {!showTranslation ? "translation" : `${props.english}`}
        </p>
      </div>
    </div>
  );
}
