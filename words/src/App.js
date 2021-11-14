import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Flashcard from "./components/Flashcard/Flashcard";
import Button from "./components/Buttons/Button";
import Topic from "./components/Topics/Topic";
import WelcomingNote from "./components/WelcomingNote/WelcomingNote";

import sport from "./components/Topics/sport.jpg";
import travel from "./components/Topics/travel.jpg";
import fun from "./components/Topics/fun.jpg";
import colors from "./components/Topics/colors.jpg";

import "./App.css";

const words = [
  {
    id: "1",
    french: "rouge",
    transcription: "[ ˈruːʒ ]",
    english: "red",
    category: "colors",
  },
  // {
  //     id: "2",
  //     french: "gris",
  //     transcription: "[ ɡʀi ]",
  //     english: "grey",
  //     category: "colors",
  // },
  // {
  //     id: "3",
  //     french: "vert",
  //     transcription: "[ vɛʀ ]",
  //     english: "green",
  //     category: "colors",
  // },
  // {
  //     id: "4",
  //     french: "blanc",
  //     transcription: "[ blɑ̃ ]",
  //     english: "white",
  //     category: "colors",
  // },
  // {
  //     id: "5",
  //     french: "noir",
  //     transcription: "[ nwaʀ ]",
  //     english: "black",
  //     category: "colors",
  // },
  // {
  //     id: "6",
  //     french: "jaune",
  //     transcription: "[ ʒon ]",
  //     english: "yellow",
  //     category: "colors",
  // },
  // {
  //     id: "7",
  //     french: "bleu",
  //     transcription: "[ blo͝o ]",
  //     english: "blue",
  //     category: "colors",
  // },
];

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

let decisions = [
  {
    key: 21,
    status: "know",
  },
  {
    key: 22,
    status: "do not know",
  },
];

function App() {
  return (
    <div className="App">
      <Header />

      <WelcomingNote />
      <div className="category">
        {categoryTopics.map((topic) => (
          <Topic key={topic.id} category={topic.category} image={topic.image} />
        ))}
      </div>
      {/* <div className="container">
        {words.map((word) => (
          <Flashcard
            key={word.id}
            french={word.french}
            transcription={word.transcription}
            english={word.english}
            category={word.category}
          />
        ))}
      </div>
      <div className="decisionBtn">
        {decisions.map((decision) => (
          <Button key={decision.key} status={decision.status} />
        ))}
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
