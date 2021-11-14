import React from "react";
import "./CreateTopicTable.scss";

function CreateTopicTable(props) {
  return (
    <div className="TopicTable">
      <div className="tableRow">{props.typeInputEnglish}</div>
    </div>
  );
}

export default CreateTopicTable;
