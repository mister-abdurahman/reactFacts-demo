import React from "react";
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import "./index.css";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <div className="container">
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainContent darkMode={darkMode} />
    </div>
  );
}
