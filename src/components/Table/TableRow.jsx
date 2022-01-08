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
  const [changeTranslation, setChangeTranslation] = useState(props.french);

  const { words, isLoading, error, updateData, setWords } =
    useContext(APIContext);
  const [value, setValue] = useState("");

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
      fetch(`http://localhost:8000/colors/${props.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          french: changeTranslation,
          transcription: changeTranscription,
          english: changeWord,
          category: [],
        }),
      })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            const updateWords = [...words];
            const updateWordsIndex = updateWords.findIndex(
              (el) => el.id === props.id
            );
            updateWords[updateWordsIndex] = {
              ...words[updateWordsIndex],
              english: changeWord,
              french: changeTranslation,
              transcription: changeTranscription,
            };
            console.log(updateWords);
            setWords(updateWords);
            setBtnEdit(!btnEdit);
            setValue("");
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
    fetch(`http://localhost:8000/colors/${props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((response) => {
      if (response.status === 200) {
        const updateWords = words.filter((el) => el.id !== props.id);
        setWords(updateWords);
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
          <div className="tableHeader row">{props.french}</div>
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
