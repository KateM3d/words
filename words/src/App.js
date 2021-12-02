import React from "react";
import Header from "./components/Header/Header";
import WelcomingNote from "./components/WelcomingNote/WelcomingNote";
import Flashcard from "./components/Flashcard/Flashcard";
import Table from "./components/Table/Table";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomingNote />
      <Flashcard />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
