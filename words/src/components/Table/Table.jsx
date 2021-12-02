import React from "react";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

let createTableInner = [
  {
    id: 1001,
    word: "Bonjour",
    transcription: "xxx",
    translation: "Hello",
  },
  {
    id: 1002,
    word: "Au'revoir",
    transcription: "xxx",
    translation: "See you",
  },
  {
    id: 1003,
    word: "Ca va",
    transcription: "xxx",
    translation: "How are you?/Good",
  },
  {
    id: 1004,
    word: "Bien",
    transcription: "xxx",
    translation: "Good",
  },
];

function CreateTopicTable() {
  return (
    <div className="containerTable">
      <TableHeader />
      {createTableInner.map((inner) => (
        <TableRow
          key={inner.id}
          id={inner.id}
          word={inner.word}
          transcription={inner.transcription}
          translation={inner.translation}
          editMode={inner.id === 1002 || inner.id === 1004}
        />
      ))}
    </div>
  );
}

export default CreateTopicTable;
