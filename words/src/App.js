import React from "react";
import Header from "./components/Header/Header";
import WelcomingNote from "./components/WelcomingNote/WelcomingNote";
import Flashcard from "./components/Flashcard/Flashcard";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomingNote />
      <Flashcard />
      <Footer />
    </div>
  );
}

export default App;
