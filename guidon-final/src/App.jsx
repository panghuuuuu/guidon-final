import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";

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
    </div>
  );
};

export default App;
