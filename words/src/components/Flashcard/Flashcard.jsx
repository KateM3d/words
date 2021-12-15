import React, { useState } from "react";
import "./Flashcard.scss";
import Card from "../Card/Card";

const wordsColors = [
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

// const wordsSport = [
//   {
//     id: "1",
//     french: "le hockey",
//     transcription: "[ ˈɔkɛ ]",
//     english: "hockey",
//     category: "sport",
//   },
//   {
//     id: "2",
//     french: "football",
//     transcription: "[ futbol ]",
//     english: "soccer",
//     category: "sport",
//   },
// ];

// const wordsTravel = [
//   {
//     id: "1",
//     french: "avion",
//     transcription: "[ avjɔ̃ ]",
//     english: "plane",
//     category: "travel",
//   },
//   {
//     id: "2",
//     french: "prendre des vacances",
//     transcription: "[ vakɑ̃s ]",
//     english: "to take a vacation",
//     category: "travel",
//   },
// ];

// let words=[wordsColors,wordsSport,wordsTravel]

function Flashcard() {
  const [count, setCount] = useState(0);
  const [isLearned, setIsLearned] = useState(0);

  function handleIncrementCount() {
    setCount(count + 1);

    if (count + 2 > wordsColors.length) {
      return setCount(0);
    }
  }
  const handleDecrementCount = () => {
    let newCount = count - 1;
    if (newCount < 1) {
      newCount = wordsColors.length - 1;
    }
    setCount(newCount);
  };

  function handleLearnedChange() {
    setIsLearned((prevLearned) => prevLearned + 1);
  }
  return (
    <div className="containerFlashcardCount">
      <button className="sliderBtn" onClick={handleDecrementCount}>
        Prev
      </button>

      <div className="containerFlashcard">
        <Card
          onClick={handleLearnedChange}
          key={wordsColors[count].id}
          category={wordsColors[count].category}
          french={wordsColors[count].french}
          transcription={wordsColors[count].transcription}
          english={wordsColors[count].english}
        />

        <p>
          {wordsColors[count].id}/{wordsColors.length}
        </p>
        <p onWordLearned={handleLearnedChange}>Total Learned: {isLearned}</p>
      </div>
      <button className="sliderBtn" onClick={handleIncrementCount}>
        Next
      </button>
    </div>
  );
}

export default Flashcard;
