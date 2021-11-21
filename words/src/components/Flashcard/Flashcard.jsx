import React from "react";
import { useState } from "react";
import "./Flashcard.scss";
import DropArea from "../DropArea/DropArea";

function Flashcard(props) {
  const [showTranslation, setShowTranslation] = useState(false);

  let handleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  let hideTranslation = () => {
    setShowTranslation(!showTranslation);
  };
  //drag and drop flashcards
  let flashcards = document.querySelectorAll(".flashcardBody");
  let dragItem;

  for (let flashcard of flashcards) {
    flashcard.addEventListener("dragstart", dragStart);
    flashcard.addEventListener("dragend", dragEnd);
  }

  function dragStart() {
    setTimeout(() => (this.style.display = "none"), 0);
    return (dragItem = this);
  }

  function dragEnd() {
    setTimeout(() => (this.style.display = "block"), 0);
    return (dragItem = this);
  }

  let dropAreas = document.querySelectorAll(".dropArea");
  for (let dropArea of dropAreas) {
    dropArea.addEventListener("dragover", dragOver);
    dropArea.addEventListener("dragenter", dragEnter);
    dropArea.addEventListener("dragleave", dragLeave);
    dropArea.addEventListener("drop", drop);
  }
  console.log(dropAreas);
  function drop(e) {
    e.preventDefault();
    this.append(dragItem);
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
  }

  function dragLeave() {
    this.style.border = "none";
  }

  return (
    <>
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
    </>
  );
}

export default Flashcard;
