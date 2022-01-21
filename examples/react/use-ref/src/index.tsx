import React from "react";
import ReactDOM from "react-dom";
import { Inputs } from "./inputs";
import { ReRendering } from "./re-rendering";

const App = () => {
  return (
    <>
      <ReRendering />
      <Inputs />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
