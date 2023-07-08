import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
const App = () => {
  const [activeIcon, setActiveIcon] = useState("hamburger");

  const toggleIcon = () => {
    setActiveIcon((prevIcon) =>
      prevIcon === "hamburger" ? "close" : "hamburger"
    );
  };

  return (
    <div>
      <Header activeIcon={activeIcon} toggleIcon={toggleIcon} />
      <Nav activeIcon={activeIcon} toggleIcon={toggleIcon} />
      <Main />
    </div>
  );
};

export default App;
