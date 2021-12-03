import React from "react";
import Header from "./components/Header/Header";
import WelcomingNote from "./components/WelcomingNote/WelcomingNote";
import Topic from "./components/Topic/Topic";
import ExerciseCard from "./components/ExerciseCard/ExerciseCard";
import Flashcard from "./components/Flashcard/Flashcard";
import Table from "./components/Table/Table";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomingNote />
      <div className="containerRow">
        <Topic />
      </div>
      <div className="containerRow">
        <ExerciseCard />
      </div>
      <Flashcard />
      <div className="containerRow">
        <Button status="know" />
        <Button />
      </div>
      <Table />
      <Footer />
    </div>
  );
}

export default App;
