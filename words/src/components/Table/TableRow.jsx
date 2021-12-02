import React from "react";
import { useState } from "react";
import "./Table.scss";

function TableRow(props) {
  const [btnEdit, setBtnEdit] = useState(false);

  const handleModifyClick = () => {
    setBtnEdit(!btnEdit);
  };
  return (
    <div className="tableHeaderContainer">
      {btnEdit === true ? (
        <>
          <div className="tableHeader row">
            <input className="input" type="text" defaultValue={props.word} />
          </div>
          <div className="tableHeader row">
            <input
              className="input"
              type="text"
              defaultValue={props.transcription}
            />
          </div>
          <div className="tableHeader row">
            <input
              className="input"
              type="text"
              defaultValue={props.translation}
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
        {props.editMode ? null : <button className="tableBtn">Save</button>}
      </div>
    </div>
  );
}

export default TableRow;
