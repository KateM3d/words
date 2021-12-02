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
  //   {
  //     id: "3",
  //     french: "vert",
  //     transcription: "[ vɛʀ ]",
  //     english: "green",
  //     category: "colors",
  //   },
  //   {
  //     id: "4",
  //     french: "blanc",
  //     transcription: "[ blɑ̃ ]",
  //     english: "white",
  //     category: "colors",
  //   },
  //   {
  //     id: "5",
  //     french: "noir",
  //     transcription: "[ nwaʀ ]",
  //     english: "black",
  //     category: "colors",
  //   },
  //   {
  //     id: "6",
  //     french: "jaune",
  //     transcription: "[ ʒon ]",
  //     english: "yellow",
  //     category: "colors",
  //   },
  //   {
  //     id: "7",
  //     french: "bleu",
  //     transcription: "[ blo͝o ]",
  //     english: "blue",
  //     category: "colors",
  //   },
];

function Card(props) {
  const [showTranslation, setShowTranslation] = useState(false);

  function handleTranslationClick() {
    setShowTranslation(!showTranslation);
  }
  return (
    <div className="containerCards">
      <div className="flashcardBody">
        <p className="word_category">{props.category}</p>
        <p className="word_french">{props.french}</p>
        <p className="word_transcription">{props.transcription}</p>
        <p
          className={`word_french ${!showTranslation && "translationBtn"}`}
          onClick={handleTranslationClick}
        >
          {!showTranslation ? "translation" : `${props.english}`}
        </p>
      </div>
    </div>
  );
}

function Flashcard() {
  const [count, setCount] = useState(0);

  function handleIncrementCount() {
    setCount(count + 1);
    if (count === words.length) {
      return setCount(0);
    }
  }
  function handleDecrementCount() {
    setCount(count - 1);
    if (count === 0) {
      setCount(0);
    }
  }
  return (
    <div className="containerFlashcardCount">
      <button className="sliderBtn" onClick={handleDecrementCount}>
        Prev
      </button>

      <div className="containerFlashcard">
        {words.map((word) => (
          <Card
            key={word.id}
            category={word.category}
            french={word.french}
            transcription={word.transcription}
            english={word.english}
          />
        ))}

        <p>
          {count}/{words.length}
        </p>
      </div>
      <button className="sliderBtn" onClick={handleIncrementCount}>
        Next
      </button>
    </div>
  );
}

export default Flashcard;
