import React, { useContext } from "react";
import { useState } from "react";
import "./Table.scss";
import { APIContext } from "../../Context/apiContext";

function TableRow(props) {
  const [btnEdit, setBtnEdit] = useState(false);
  const [changeWord, setChangeWord] = useState(props.english);
  const [changeTranscription, setChangeTranscription] = useState(
    props.transcription
  );
  const [changeTranslation, setChangeTranslation] = useState(props.russian);

  const { words, isLoading, error, updateData } = useContext(APIContext);
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
    if (
      !onlyLatinCharacters(changeWord) ||
      !onlyLatinCharacters(changeTranslation)
    ) {
      alert("please check your spelling");
    } else {
      //
      //
      fetch(`http://itgirlschool.justmakeit.ru/api/words/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          english: changeWord,
          russian: changeTranslation,
          transcription: changeTranscription,
          tags: [],
        }),
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error("Oops! ...");
          }
        })

        .then((data) => {
          setChangeWord(changeWord);
          setChangeTranslation(changeTranslation);
          console.log(data);
          console.log(changeWord);
          console.log(changeTranslation);
        })
        .catch((err) => console.log(err));
    }
    setBtnEdit(!btnEdit);
    setValue("");
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
          <div className="tableHeader row">{props.english}</div>
          <div className="tableHeader row"> {props.transcription}</div>
          <div className="tableHeader row">{props.russian}</div>
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
