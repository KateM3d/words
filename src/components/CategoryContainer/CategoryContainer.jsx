import React from "react";
import Topic from "../Topic/Topic";
import Flashcard from "../Flashcard/Flashcard";

export default function CategoryContainer() {
  return (
    <>
      <div className="containerFlashcard">
        <Flashcard />
      </div>
      <div className="containerRow">
        <Topic />
      </div>
    </>
  );
}
