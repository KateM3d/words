import React from "react";
import { useState } from "react";
import "./Table.scss";

function TableRow(props) {
  const [btnEdit, setBtnEdit] = useState(false);
  const [changeWord, setChangeWord] = useState(props.word);
  const [changeTranscription, setChangeTranscription] = useState(
    props.transcription
  );
  const [changeTranslation, setChangeTranslation] = useState(props.translation);

  const handleModifyClick = () => {
    setBtnEdit(!btnEdit);
  };
  return (
    <div className="tableHeaderContainer">
      {btnEdit === true ? (
        <>
          <div className="tableHeader row">
            <input
              className={`input ${changeWord === "" && "red"}`}
              type="text"
              value={changeWord}
              onChange={(e) => setChangeWord(e.target.value)}
            />
          </div>
          <div className="tableHeader row">
            <input
              className={`input ${changeTranscription === "" && "red"}`}
              type="text"
              value={changeTranscription}
              onChange={(event) => setChangeTranscription(event.target.value)}
            />
          </div>
          <div className="tableHeader row">
            <input
              className={`input ${changeTranslation === "" && "red"}`}
              type="text"
              value={changeTranslation}
              onChange={(event) => setChangeTranslation(event.target.value)}
            />
          </div>
        </>
      ) : (
        <>
          <div className="tableHeader row">{props.word}</div>
          <div className="tableHeader row"> {props.transcription}</div>
          <div className="tableHeader row">{props.translation}</div>
        </>
      )}

      <div className="tableHeader row rowBtn">
        <button onClick={handleModifyClick} className="tableBtn">
          {btnEdit === true ? "Delete Edit" : "Edit"}
        </button>
        <button className="tableBtn">Delete</button>
        <button
          className={`tableBtn ${
            (changeWord === "" ||
              changeTranslation === "" ||
              changeTranscription === "") &&
            "disable"
          }`}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default TableRow;
