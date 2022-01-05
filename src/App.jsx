import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import image from "./404.jpg";
import Header from "./components/Header/Header";
import WelcomingNote from "./components/WelcomingNote/WelcomingNote";
import ExerciseCard from "./components/ExerciseCard/ExerciseCard";
import Table from "./components/Table/Table";

import Footer from "./components/Footer/Footer";
import CategoryContainer from "./components/CategoryContainer/CategoryContainer";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <WelcomingNote />
            <Table />
          </Route>
          <Route path="/category">
            <CategoryContainer />
          </Route>
          <Route path="/exercise">
            <div className="containerRow">
              <ExerciseCard />
            </div>
          </Route>
          <Route path="/notes">
            <Table />
          </Route>
          <Route>
            <div className="mistake">
              <img className="mistakeImg" src={image} alt="not found" />
            </div>
          </Route>
        </Switch>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
