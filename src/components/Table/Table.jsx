import React, { useContext } from "react";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import { APIContext } from "../../Context/apiContext";

// let createTableInner = [
//   {
//     id: 1001,
//     word: "Bonjour",
//     transcription: "xxx",
//     translation: "Hello",
//   },
//   {
//     id: 1002,
//     word: "Au'revoir",
//     transcription: "xxx",
//     translation: "See you",
//   },
//   {
//     id: 1003,
//     word: "Ca va",
//     transcription: "xxx",
//     translation: "How are you?/Good",
//   },
//   {
//     id: 1004,
//     word: "Bien",
//     transcription: "xxx",
//     translation: "Good",
//   },
// ];

function CreateTopicTable() {
  const { words } = useContext(APIContext);

  return (
    <div className="containerTable">
      <TableHeader />
      {words.map((inner) => (
        <TableRow
          key={inner.id}
          id={inner.id}
          english={inner.english}
          transcription={inner.transcription}
          russian={inner.russian}
          editMode={inner.id === 1002 || inner.id === 1004}
        />
      ))}
    </div>
  );
}

export default CreateTopicTable;
