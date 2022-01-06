import React, { useState, useContext } from "react";
import "./Flashcard.scss";
import Card from "../Card/Card";
import { APIContext } from "../../Context/apiContext";

// const wordsColors = [
//   {
//     id: "1",
//     french: "rouge",
//     transcription: "[ ˈruːʒ ]",
//     english: "red",
//     category: "colors",
//   },
//   {
//     id: "2",
//     french: "gris",
//     transcription: "[ ɡʀi ]",
//     english: "grey",
//     category: "colors",
//   },
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
// ];

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
  const { words } = useContext(APIContext);
  const [count, setCount] = useState(1);
  const [isLearned, setIsLearned] = useState(0);

  function handleIncrementCount() {
    setCount(count + 1);

    if (count + 1 > words.length) {
      return setCount(1);
    }
  }
  const handleDecrementCount = () => {
    let newCount = count - 1;
    if (newCount < 1) {
      newCount = words.length;
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
          key={words.id}
          tags={words.tags}
          russian={words.russian}
          transcription={words.transcription}
          english={words.english}
        />

        <p>
          {count}/{words.length}
        </p>
        <p>Total Learned: {isLearned}</p>
      </div>
      <button className="sliderBtn" onClick={handleIncrementCount}>
        Next
      </button>
    </div>
  );
}

export default Flashcard;
