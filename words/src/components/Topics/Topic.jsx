import React from "react";
import "../Flashcard/Flashcard.scss";
import "./Topic.scss";
import sport from "./sport.jpg";
import travel from "./travel.jpg";
import fun from "./fun.jpg";
import colors from "./colors.jpg";

function Topic(props) {
  return (
    <div className="flashcardBody">
      <p className={`word_category`}>{props.category}</p>
      <img className="topicImage" src={props.image} alt={props.category} />
    </div>
  );
}

export default Topic;
