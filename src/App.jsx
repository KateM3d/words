import { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { APIContext } from "./Context/apiContext";
import Header from "./components/Header";
import WelcomingNote from "./components/WelcomingNote";
import Table from "./components/Table";
import Mistake from "./components/404";
import CategoryContainer from "./components/CategoryContainer";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
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
          <Table />
        </Route>
        <Route path="/category">
          <CategoryContainer />
        </Route>
        <Route path="/table">
          <Table />
        </Route>
        <Route>
          <Mistake />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
