import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Flashcard from "./components/Flashcard/Flashcard";
import Button from "./components/Buttons/Button";
import Topic from "./components/Topics/Topic";
import WelcomingNote from "./components/WelcomingNote/WelcomingNote";
import ExerciseCard from "./components/ExerciseCard/ExerciseCard";
import CreateTopicTable from "./components/CreateTopicTable/CreateTopicTable";
import DropArea from "./components/DropArea/DropArea";

import sport from "./components/Topics/sport.jpg";
import travel from "./components/Topics/travel.jpg";
import fun from "./components/Topics/fun.jpg";
import colors from "./components/Topics/colors.jpg";
import english from "./components/ExerciseCard/english.png";
import french from "./components/ExerciseCard/french.png";

import "./App.scss";
//color words json
const words = [
  {
    id: "1",
    french: "rouge",
    transcription: "[ ˈruːʒ ]",
    english: "red",
    category: "colors",
  },
  {
    id: "2",
    french: "gris",
    transcription: "[ ɡʀi ]",
    english: "grey",
    category: "colors",
  },
  {
    id: "3",
    french: "vert",
    transcription: "[ vɛʀ ]",
    english: "green",
    category: "colors",
  },
  {
    id: "4",
    french: "blanc",
    transcription: "[ blɑ̃ ]",
    english: "white",
    category: "colors",
  },
  {
    id: "5",
    french: "noir",
    transcription: "[ nwaʀ ]",
    english: "black",
    category: "colors",
  },
  {
    id: "6",
    french: "jaune",
    transcription: "[ ʒon ]",
    english: "yellow",
    category: "colors",
  },
  {
    id: "7",
    french: "bleu",
    transcription: "[ blo͝o ]",
    english: "blue",
    category: "colors",
  },
];

//category topics json
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
//decisions buttons
const decisions = [
  {
    key: 21,
    status: "know",
  },
  {
    key: 22,
    status: "do not know",
  },
];

//Type of exercise section json
const exerciseTypes = [
  {
    key: 31,
    type: "English TO French",
    typeImageOne: english,
    typeImageTwo: french,
  },
  {
    key: 32,
    type: "French TO English",
    typeImageOne: french,
    typeImageTwo: english,
  },
];

//table for create your own category json

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
      <div className="containerExerciseType">
        <div className="category">
          {exerciseTypes.map((exType) => (
            <ExerciseCard
              key={exType.key}
              type={exType.type}
              typeImageOne={exType.typeImageOne}
              typeImageTwo={exType.typeImageTwo}
            />
          ))}
        </div>
      </div>
      <div className="container">
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
      <DropArea />
      <div className="decisionBtn">
        {decisions.map((decision) => (
          <Button key={decision.key} status={decision.status} />
        ))}
      </div>
      <CreateTopicTable />
      <Footer />
    </div>
  );
}

export default App;
