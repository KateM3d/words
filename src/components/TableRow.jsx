import { useContext, useState } from "react";
import { APIContext } from "../Context/apiContext";
import Swal from "sweetalert2";

export default function TableRow(props) {
  const [btnEdit, setBtnEdit] = useState(false);
  const [changeWord, setChangeWord] = useState(props.english);
  const [changeTranscription, setChangeTranscription] = useState(
    props.transcription
  );
  const [changeTranslation, setChangeTranslation] = useState(props.french);
  const { words, setWords } = useContext(APIContext);

  function handleModifyClick() {
    setBtnEdit(!btnEdit);
  }

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
      fetch(`http://localhost:8000/words/${props.id}`, {
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
            setWords(updateWords);
            setBtnEdit(!btnEdit);
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
  }
  function handleInputDelete(id) {
    fetch(`http://localhost:8000/words/${props.id}`, {
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
          {btnEdit === true ? "Cancel" : "Edit"}
        </button>
        <button type="submit" className="tableBtn" onClick={handleInputDelete}>
          Delete
        </button>
        {btnEdit === true && (
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
        )}
      </div>
    </form>
  );
}
