import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheets/index.css";
import "./stylesheets/App.scss";
import { HashRouter } from "react-router-dom";
import App from "./components/App";

/* REACT 17
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
*/

//REACT 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
