import React from "react";
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
  return (
    <div className="containerCards">
      {words.map((word) => (
        <div className="cardInner" key={word.id}>
          <p>{word.category}</p>
          <p>{word.french}</p>
          <p>{word.transcription}</p>
          <p>translation</p>
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
