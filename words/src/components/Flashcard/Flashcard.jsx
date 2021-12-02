import React, { useState } from "react";
import "./Flashcard.scss";

const words = [
  {
    id: "1",
    french: "rouge",
    transcription: "[ ˈruːʒ ]",
    english: "red",
    category: "colors",
  },
  {
    id: "2",
    french: "gris",
    transcription: "[ ɡʀi ]",
    english: "grey",
    category: "colors",
  },
  {
    id: "3",
    french: "vert",
    transcription: "[ vɛʀ ]",
    english: "green",
    category: "colors",
  },
  {
    id: "4",
    french: "blanc",
    transcription: "[ blɑ̃ ]",
    english: "white",
    category: "colors",
  },
  {
    id: "5",
    french: "noir",
    transcription: "[ nwaʀ ]",
    english: "black",
    category: "colors",
  },
  {
    id: "6",
    french: "jaune",
    transcription: "[ ʒon ]",
    english: "yellow",
    category: "colors",
  },
  {
    id: "7",
    french: "bleu",
    transcription: "[ blo͝o ]",
    english: "blue",
    category: "colors",
  },
];

function Card() {
  const [showTranslation, setShowTranslation] = useState(false);

  function handleTranslationClick() {
    setShowTranslation(!showTranslation);
  }
  return (
    <div className="containerCards">
      {words.map((word) => (
        <div className="flashcardBody" key={word.id}>
          <p className={`word ${word.category}`}>{word.category}</p>
          <p className={`word ${word.french}`}>{word.french}</p>
          <p className={`word ${word.transcription} `}>{word.transcription}</p>
          <p
            className={`word ${word.french} ${
              !showTranslation && "translationBtn"
            }`}
            onClick={handleTranslationClick}
          >
            {!showTranslation ? "translation" : `${word.english}`}
          </p>
        </div>
      ))}
    </div>
  );
}

function Flashcard() {
  return (
    <div className="containerFlashcard">
      <Card />
    </div>
  );
}

export default Flashcard;
