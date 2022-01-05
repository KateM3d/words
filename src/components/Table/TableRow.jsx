import React from "react";
import { useState } from "react";
import "./Table.scss";
import { useAPI } from "../../Context/apiContext";

function TableRow(props) {
  const [btnEdit, setBtnEdit] = useState(false);
  const [changeWord, setChangeWord] = useState(props.word);
  const [changeTranscription, setChangeTranscription] = useState(
    props.transcription
  );
  const [changeTranslation, setChangeTranslation] = useState(props.translation);

  const { words, isLoading, error, updateData } = useAPI();
  const [value, setValue] = useState("");
  if (error) return <h5>error...</h5>;
  if (isLoading || !words.length) return <h5>is loading...</h5>;

  const handleModifyClick = () => {
    setBtnEdit(!btnEdit);
  };

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  function onlyLatinCharacters(value) {
    return /^[a-zA-Z]+$/.test(value);
  }
  function handleInputSave() {
    let inputInnerWord = changeWord[0].toUpperCase() + changeWord.slice(1);
    let inputInnerTransl =
      changeTranslation[0].toUpperCase() + changeTranslation.slice(1);
    let correctTranscription = changeTranscription.includes("x");

    if (
      !onlyLatinCharacters(inputInnerWord) ||
      !onlyLatinCharacters(inputInnerTransl) ||
      !onlyLatinCharacters(correctTranscription)
    ) {
      alert("please check your spelling");
    } else {
      changeWord !== props.word && updateData(value);
      changeTranscription !== props.transcription && updateData(value);
      changeTranslation !== props.translation && updateData(value);
      setBtnEdit(!btnEdit);
      setValue("");
    }
  }
  return (
    <form className="tableHeaderContainer" onSubmit={handleFormSubmit}>
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
        <button type="submit" onClick={handleModifyClick} className="tableBtn">
          {btnEdit === true ? "Delete Edit" : "Edit"}
        </button>
        <button type="submit" className="tableBtn">
          Delete
        </button>
        <button
          onClick={handleInputSave}
          type="submit"
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
    </form>
  );
}

export default TableRow;
