import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import getApiData from "../services/api";
import ls from "../services/local-storage";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  const [characters, setCharacters] = useState(ls.get("characters", []));

  //COMPROBANDO SI HAY DATOS EN EL LOCALSTORAGE -------------
  useEffect(() => {
    if (characters.length === 0) {
      getApiData().then((charactersData) => {
        setCharacters(charactersData);
      });
    }
  }, []);

  //GUARDANDO EN LOCALSTORAGE -------------------------------
  useEffect(() => {
    ls.set("characters", characters);
  }, [characters]);

  return (
    <>
      <Header />
      <Filters />
      <main className="mainContent">
        <CharacterList characters={characters} />
      </main>
      <Footer />
    </>
  );
};

export default App;
