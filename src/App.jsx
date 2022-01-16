import { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { APIContext } from "./Context/apiContext";
import Header from "./components/Header";
import WelcomingNote from "./components/WelcomingNote";
import Topic from "./components/Topic";
import Table from "./components/Table";
import Mistake from "./components/404";
import CategoryContainer from "./components/CategoryContainer";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import NewWord from "./components/NewWord";
import "./App.scss";

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
      <Header />
      <Switch>
        <Route exact path="/">
          <WelcomingNote />
          <Topic />
        </Route>
        <Route exact path="/exercise">
          <CategoryContainer />
        </Route>
        <Route exact path="/table">
          <Table />
        </Route>
        <Route exact path="/words">
          <NewWord />
        </Route>
        <Route>
          <Mistake />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
