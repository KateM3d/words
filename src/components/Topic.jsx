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
    category: "Create Your Own Category",
    image: fun,
  },
];

export default function Topic() {
  return (
    <>
      {categoryTopics.map((topic) => (
        <div key={topic.id} className="flashcardBody">
          <p className={`topicCategory`}>{topic.category}</p>
          <img className="topicImage" src={topic.image} alt={topic.category} />
        </div>
      ))}
    </>
  );
}
