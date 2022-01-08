import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import WelcomingNote from "./components/WelcomingNote/WelcomingNote";
import Table from "./components/Table/Table";
import CategoryContainer from "./components/CategoryContainer/CategoryContainer";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { APIContext } from "./Context/apiContext";
import "./App.scss";
import image from "./404.jpg";

export default function App() {
  const { isLoading, error } = useContext(APIContext);
  if (error) {
    return <p>{error?.message}</p>;
  }
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

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
          <Route path="/table">
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
