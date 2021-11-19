import React from "react";
import "./CreateTopicTable.scss";

function TableRow(props) {
  return (
    <div className="tableHeaderContainer">
      <div className="tableHeader row">{props.word}</div>
      <div className="tableHeader row">{props.transcription}</div>
      <div className="tableHeader row">{props.translation}</div>
      <div className="tableHeader row rowBtn">
        {props.editMode ? (
          <>
            <button className="tableBtn">Edit</button>
            <button className="tableBtn">Delete</button>
          </>
        ) : (
          <>
            <button className="tableBtn">Save</button>
            <button className="tableBtn">Edit</button>
            <button className="tableBtn">Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

export default TableRow;
