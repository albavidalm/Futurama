import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "./stylesheets/index.css";
import "./stylesheets/App.scss";

/* REACT 17
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
*/

//REACT 18 with react-router-dom v5
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <HashRouter>
//     <App />
//   </HashRouter>
// );

//REACT 18 with react-router-dom v6
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
