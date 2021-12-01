import React, { useRef } from "react";
import { useState } from "react";

import "./DropArea.scss";

const AreaItem = () => {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="dropArea"
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={(e) => e.preventDefault()}
      onDragLeave={() => {
        if (!ref.current) return;
        ref.current.style.border = "none";
      }}
      onDrop={(e) => {
        const element = document.getElementById(
          "flashcardBody" + e.dataTransfer.getData("id")
        );
        if (element) {
          ref.current.append(element);
          element.style.position = "absolute";
        }
      }}
    ></div>
  );
};

function DropArea() {
  const [clickLeft, setClickLeft] = useState(0);
  const [clickRight, setClickRight] = useState(0);
  return (
    <div className="containerDropArea">
      <button onClick={() => setClickLeft(clickLeft - 1)}>left</button>
      <AreaItem />
      <button onClick={() => setClickRight(clickRight - 1)}>right</button>
      <button onClick={() => setClickLeft(clickLeft - 1)}>left</button>
      <AreaItem />
      <button onClick={() => setClickRight(clickRight - 1)}>right</button>
    </div>
  );
}

export default DropArea;
