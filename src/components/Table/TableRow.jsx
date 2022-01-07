import React, { useContext } from "react";
import { useState } from "react";
import { APIContext } from "../../Context/apiContext";
import Swal from "sweetalert2";
import "./Table.scss";

function TableRow(props) {
  const [btnEdit, setBtnEdit] = useState(false);
  const [changeWord, setChangeWord] = useState(props.english);
  const [changeTranscription, setChangeTranscription] = useState(
    props.transcription
  );
  const [changeTranslation, setChangeTranslation] = useState(props.russian);

  const { words, isLoading, error, updateData, setWords } =
    useContext(APIContext);
  const [value, setValue] = useState("");

  if (error) return <h5>error...</h5>;
  if (isLoading || !words.length) return <h5>is loading...</h5>;

  const handleModifyClick = () => {
    setBtnEdit(!btnEdit);
  };

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  function onlyLatinCharacters(input) {
    return /^[a-zA-Z]+$/.test(input);
  }
  function handleInputSave(id) {
    if (
      !onlyLatinCharacters(changeWord) ||
      !onlyLatinCharacters(changeTranslation)
    ) {
      Swal.fire({
        title: "Attention!",
        text: "Please use only latin symbols",
        icon: "error",
        confirmButtonText: "ok",
      });
    } else {
      fetch(`http://itgirlschool.justmakeit.ru/api/words/${props.id}/update`, {
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
            const updateWords = [...words];
            const updateWordsIndex = updateWords.findIndex(
              (el) => el.id === props.id
            );
            updateWords[updateWordsIndex] = {
              ...words[updateWordsIndex],
              english: changeWord,
              russian: changeTranslation,
              transcription: changeTranscription,
            };
            setWords(updateWords);
            setBtnEdit(!btnEdit);
            setValue("");

            // return response.json();
          } else {
            throw new Error("Oops! ...");
          }
        })

        .then((data) => {
          Swal.fire({
            title: "Thank you!",
            text: "You have successfully updated the system",
            icon: "success",
            confirmButtonText: "Cool",
          });
        })
        .catch((err) =>
          Swal.fire({
            title: "Error!",
            text: "Something went wrong...",
            icon: "error",
            confirmButtonText: "ok",
          })
        );
    }

    setBtnEdit(!btnEdit);
    setValue("");
  }
  function handleInputDelete(id) {
    fetch(`http://itgirlschool.justmakeit.ru/api/words/${props.id}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((response) => {
      if (response.status === 200) {
        const updateWords = [...words];
        const updateWordsIndex = updateWords.findIndex(
          (el) => el.id === props.id
        );
        updateWords[updateWordsIndex] = {
          ...words[updateWordsIndex],
          english: "",
          russian: "",
          transcription: "",
        };
        setWords(updateWords);
        setValue("");
      } else {
        throw new Error("Oops! ...");
      }
    });
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
        <button type="submit" className="tableBtn" onClick={handleInputDelete}>
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
