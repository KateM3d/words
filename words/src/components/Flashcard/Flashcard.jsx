import React, { useRef } from "react";
import { useState } from "react";
import "./Flashcard.scss";

function Flashcard(props) {
  const ref = useRef(null); // это просто ссылка на элемент карточки, раньше он у тебя назывался dragItem
  const [showTranslation, setShowTranslation] = useState(false);
  const [count, setCount] = useState(0);

  const handleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  const hideTranslation = () => {
    setShowTranslation(!showTranslation);
  };
  function handleIncrementClick() {
    if (count < props.length) setCount(count + 1);
  }
  function handleDecrementClick() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function dragStart(e) {
    const element = ref.current;
    if (!element) return;
    e.dataTransfer.setData("id", props.english); // при перетаскивании нужно проставить id, чтобы потом в onDrop можно было бы получить перетаскиваемый элемент
    setTimeout(() => (element.style.display = "none"), 0);
  }

  function dragEnd(e) {
    const element = ref.current;
    if (!element) return;
    setTimeout(() => (element.style.display = "block"), 0);
  }

  return (
    <>
      <button onClick={handleDecrementClick}>left</button>
      <div>
        <div
          id={"flashcardBody" + props.english} //id карточки нужен для того, чтобы потом в onDrop получить этот элемент и добавить его в dropArea
          className={"flashcardBody"}
          draggable
          onDragStart={dragStart} // листенеры теперь навешиваются здесь
          onDragEnd={dragEnd}
          ref={ref}
        >
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
        <div>
          <h3 className="itemOfItem">
            {count ? count : ""}/ {props.length}
          </h3>
        </div>
      </div>
      <button onClick={handleIncrementClick}>Right</button>
    </>
  );
}

export default Flashcard;
