import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer export default function Data() {

    @observable 
  return (
    <>
      <h1>hi</h1>
    </>
  );
}
