import React from "react";
import Topic from "../Topic/Topic";
import Flashcard from "../Flashcard/Flashcard";
import Button from "../Button/Button";

function CategoryContainer() {
  return (
    <>
      <div className="containerFlashcard">
        <Flashcard />
        {/* <div className="containerRow">
        <Button status="know" />
        <Button />
      </div> */}
      </div>
      <div className="containerRow">
        <Topic />
      </div>
    </>
  );
}
export default CategoryContainer;
