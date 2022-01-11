import { useState, useContext } from "react";
import { APIContext } from "../Context/apiContext";
import useCounter from "./useCounter";
import Card from "./Card";

export default function Flashcard() {
  const { words } = useContext(APIContext);
  const { count, increment, decrement } = useCounter(words);
  const [isLearned, setIsLearned] = useState(0);

  function handleLearnedChange() {
    setIsLearned((prevLearned) => prevLearned + 1);
  }
  return (
    <div className="containerFlashcardCount">
      <button className="sliderBtn" onClick={decrement}>
        Prev
      </button>
      <div className="containerFlashcard">
        <Card
          onClick={handleLearnedChange}
          key={words[count]?.id}
          category={words[count]?.category}
          french={words[count]?.french}
          transcription={words[count]?.transcription}
          english={words[count]?.english}
        />
        <p>
          {count + 1}/{words.length}
        </p>
        <p>Total Learned: {isLearned}</p>
      </div>
      <button className="sliderBtn" onClick={increment}>
        Next
      </button>
    </div>
  );
}
