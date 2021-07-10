import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const fn = async () => {
  ReactDOM.render(
    <React.StrictMode>
      <App></App>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
fn();
