import React from "react";
import ReactDOM from "react-dom/client";
// import { Main, Footer } from "./App";
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <MainContent />
  </React.StrictMode>
);
// <App /> is the name of the function from App.jsx
