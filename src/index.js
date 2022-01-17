import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { APIContextProvider } from "./Context/apiContext";

ReactDOM.render(
  <React.StrictMode>
    <APIContextProvider>
      <App />
    </APIContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
