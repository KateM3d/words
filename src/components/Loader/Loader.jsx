import React from "react";
import "./Loader.scss";
import loader from "./loader.gif";

export default function Loader() {
  return (
    <>
      <img className="loader" src={loader} alt="please wait..." />
    </>
  );
}
