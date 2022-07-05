import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from "./Heading";
import InputQuery from "./InputQuery";
import SubmitButton from "./SubHeading";
import SubHeading from "./SubmitButton";

const App = () => {
  return (
    <div id="main">
      <Heading/>
      <InputQuery/>
      <SubmitButton/>
      <SubHeading/>
    </div>
  )
}
export default App;


