import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Recents from "./components/Recents";
import Topics from "./components/Topics";
import Breaking from "./components/Breaking";
import UAAP from "./components/UAAP";
import IndexPhoto from "./components/IndexPhoto";

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
      <Recents />
      <Topics />
      <Breaking />
      <UAAP />
      <IndexPhoto />
    </div>
  );
};

export default App;
