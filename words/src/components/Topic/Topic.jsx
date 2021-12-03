import React from "react";
import "../Flashcard/Flashcard.scss";
import "./Topic.scss";
import sport from "./sport.jpg";
import travel from "./travel.jpg";
import fun from "./fun.jpg";
import colors from "./colors.jpg";

const categoryTopics = [
  {
    id: "001",
    category: "Travel",
    image: travel,
  },
  {
    id: "002",
    category: "Colors",
    image: colors,
  },
  {
    id: "003",
    category: "Sport",
    image: sport,
  },
  {
    id: "004",
    category: "Create Your Own Category",
    image: fun,
  },
];

function Topic() {
  return (
    <>
      {categoryTopics.map((topic) => (
        <div className="flashcardBody">
          <p className={`topicCategory`}>{topic.category}</p>
          <img className="topicImage" src={topic.image} alt={topic.category} />
        </div>
      ))}
    </>
  );
}

export default Topic;
