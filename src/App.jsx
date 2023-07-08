import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Recents from "./components/Recents";
import Topics from "./components/Topics";
import Breaking from "./components/Breaking";
import UAAP from "./components/UAAP";
import IndexPhoto from "./components/IndexPhoto";
import Multimedia from "./components/Multimedia";
import Categories from "./components/Categories";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

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
      <Multimedia />
      <Categories />
      <Feedback />
      <Footer />
    </div>
  );
};

export default App;
