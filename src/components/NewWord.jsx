import { useState, useContext } from "react";
import { APIContext } from "../Context/apiContext";
import Swal from "sweetalert2";

export default function NewWord(props) {
  const [category, setCategory] = useState("");
  const [english, setEnglish] = useState("");
  const [transcription, setTranscription] = useState("");
  const [french, setFrench] = useState("");

  const { words, setWords } = useContext(APIContext);

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  function onlyLatinCharacters(input) {
    return /^[a-zA-Z]+$/.test(input);
  }

  function handleInputAdd(id) {
    if (!onlyLatinCharacters(french) || !onlyLatinCharacters(english)) {
      Swal.fire({
        title: "Attention!",
        text: "Please use only latin symbols",
        icon: "error",
        confirmButtonText: "ok",
      });
    } else {
      fetch(`http://localhost:8000/words`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          french: french,
          transcription: transcription,
          english: english,
          category: category,
        }),
      })
        .then((response) => {
          console.log(response);
          if (response.status !== 404) {
            const updateWords = [...words];
            const updateWordsIndex = updateWords.findIndex(
              (el) => el.id === props.id
            );
            updateWords[updateWordsIndex] = {
              ...words[updateWordsIndex],
              english: english,
              french: french,
              transcription: transcription,
              category: category,
            };
            setWords(updateWords);
            Swal.fire({
              title: "Thank you!",
              text: "You have successfully added new word",
              icon: "success",
              confirmButtonText: "Cool",
            });
            setEnglish("");
            setFrench("");
            setTranscription("");
            setCategory("");
          } else {
            throw new Error("Oops! ...");
          }
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

  return (
    <div className="containerTable center">
      <h2>Would you like to add new words for your practice?</h2>
      <form className="tableHeader row" onSubmit={handleFormSubmit}>
        <input
          value={category}
          className="input"
          type="text"
          placeholder="category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          value={english}
          className="input"
          type="text"
          placeholder="english"
          onChange={(e) => setEnglish(e.target.value)}
        />
        <input
          value={transcription}
          className="input"
          type="text"
          placeholder="transcription"
          onChange={(e) => setTranscription(e.target.value)}
        />
        <input
          value={french}
          className="input"
          type="text"
          placeholder="french"
          onChange={(e) => setFrench(e.target.value)}
        />
      </form>
      <button type="submit" className="tableBtn" onClick={handleInputAdd}>
        Add
      </button>
    </div>
  );
}
