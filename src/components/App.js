import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import getApiData from "../services/api";
import ls from "../services/local-storage";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [nameFilter, setNameFilter] = useState("");
  const [specieFilter, setSpecieFilter] = useState("all");
  const [originFilter, setOriginFilter] = useState("all");
  const [ordered, setOrdered] = useState(false);

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

  //EVENT HANDLERS ------------------------------------------
  const handleFilter = (data) => {
    if (data.key === "name") {
      setNameFilter(data.value);
    } else if (data.key === "specie") {
      setSpecieFilter(data.value);
    } else if (data.key === "origin") {
      setOriginFilter(data.value);
    } else if (data.key === "ordered") {
      setOrdered(data.checked);
    }
  };

  //RENDER --------------------------------------------------
  const filteredCharacters = characters

    .filter((character) => {
      return character.name.toLowerCase().includes(nameFilter.toLowerCase());
    })
    .filter((character) => {
      if (specieFilter === "all") {
        return true;
      } else {
        return character.specie === specieFilter;
      }
    })
    .filter((character) => {
      if (originFilter === "all") {
        return true;
      } else {
        return character.origin === originFilter;
      }
    });

  if (ordered) {
    filteredCharacters.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

  return (
    <>
      <Header />
      <Filters handleFilter={handleFilter} />
      <main className="mainContent">
        <CharacterList characters={filteredCharacters} />
      </main>
      <Footer />
    </>
  );
};

export default App;
