import { Link } from "react-router-dom";
import sport from "../assets/sport.jpg";
import travel from "../assets/travel.jpg";
import fun from "../assets/fun.jpg";
import colors from "../assets/colors.jpg";

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
    category: "Fun",
    image: fun,
  },
];

export default function Topic() {
  return (
    <div className="container">
      {categoryTopics.map((topic, index) => (
        <Link to="/exercise" key={index}>
          <div className="flashcardBody topicCard">
            <p className={`topicCategory`}>{topic.category}</p>
            <img
              className="topicImage"
              src={topic.image}
              alt={topic.category}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
