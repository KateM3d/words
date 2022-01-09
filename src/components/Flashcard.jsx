import { useState, useContext } from "react";
import Card from "./Card";
import { APIContext } from "../Context/apiContext";

export default function Flashcard() {
  const { words } = useContext(APIContext);
  const [count, setCount] = useState(0);
  const [isLearned, setIsLearned] = useState(0);

  function handleIncrementCount() {
    setCount(count + 1);
    if (count + 2 > words.length) {
      return setCount(0);
    }
  }
  function handleDecrementCount() {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = words.length - 1;
    }
    setCount(newCount);
  }

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
      <button className="sliderBtn" onClick={handleIncrementCount}>
        Next
      </button>
    </div>
  );
}
