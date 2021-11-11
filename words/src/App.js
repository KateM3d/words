import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Flashcard from "./components/Flashcard/Flashcard";

import "./App.css";

let words = [
  {
    id: "1",
    french: "rouge",
    transcription: "[ ˈruːʒ ]",
    english: "red",
    category: "colors",
  },
  // {
  //   id: "2",
  //   french: "gris",
  //   transcription: "[ ɡʀi ]",
  //   english: "grey",
  //   category: "colors",
  // },
  // {
  //   id: "3",
  //   french: "vert",
  //   transcription: "[ vɛʀ ]",
  //   english: "green",
  //   category: "colors",
  // },
  // {
  //   id: "4",
  //   french: "blanc",
  //   transcription: "[ blɑ̃ ]",
  //   english: "white",
  //   category: "colors",
  // },
  // {
  //   id: "5",
  //   french: "noir",
  //   transcription: "[ nwaʀ ]",
  //   english: "black",
  //   category: "colors",
  // },
  // {
  //   id: "6",
  //   french: "jaune",
  //   transcription: "[ ʒon ]",
  //   english: "yellow",
  //   category: "colors",
  // },
  // {
  //   id: "7",
  //   french: "bleu",
  //   transcription: "[ blo͝o ]",
  //   english: "blue",
  //   category: "colors",
  // },
];

function App() {
  return (
    <div className="App">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
