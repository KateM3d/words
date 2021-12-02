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
  return (
    <div className="containerDropArea">
      <AreaItem />

      <AreaItem />
    </div>
  );
}

export default DropArea;
