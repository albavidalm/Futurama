import React, { useState, useEffect } from "react";
import "../stylesheets/App.scss";
import getApiData from "../services/api";
import Header from "./Header";
import Footer from "./Footer";
import CharacterList from "./CharacterList";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  return (
    <>
      <div>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <Header />
      <main className="mainContent">
        <CharacterList characters={characters} />
      </main>
      <Footer />
    </>
  );
};

export default App;
