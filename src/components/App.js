import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation, matchPath } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import NotFound from "./NotFound";
import getApiData from "../services/getApiData";
import ls from "../services/local-storage";

const App = () => {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [nameFilter, setNameFilter] = useState(ls.get("nameFilter", ""));
  const [specieFilter, setSpecieFilter] = useState(
    ls.get("specieFilter", "all")
  );
  const [originFilter, setOriginFilter] = useState(
    ls.get("originFilter", "all")
  );
  const [ordered, setOrdered] = useState(ls.get("ordered", false));

  //Checking for data in LOCALSTORAGE -------------
  useEffect(() => {
    if (characters.length === 0) {
      getApiData().then((charactersData) => {
        setCharacters(charactersData);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Saving in LOCALSTORAGE -------------------------------
  useEffect(() => {
    ls.set("characters", characters);
    ls.set("nameFilter", nameFilter);
    ls.set("specieFilter", specieFilter);
    ls.set("originFilter", originFilter);
    ls.set("ordered", ordered);
  }, [characters, nameFilter, specieFilter, originFilter, ordered]);

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

  const handleReset = () => {
    setNameFilter("");
    setSpecieFilter("all");
    setOriginFilter("all");
    setOrdered(false);
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

  //Dynamic route ---------------------------------------------------------------------
  const { pathname } = useLocation();
  const routeData = matchPath("character/:id", pathname);
  const characterId = routeData !== null ? routeData.params.id : null;
  const characterFound = characters.find(
    (character) => character.id === parseInt(characterId)
  );

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <section className="mainContent">
              <Filters
                nameFilter={nameFilter}
                specieFilter={specieFilter}
                originFilter={originFilter}
                orderFilter={ordered}
                handleFilter={handleFilter}
                handleReset={handleReset}
              />

              <CharacterList characters={filteredCharacters} />
            </section>
          }
        />

        {characterFound ? (
          <Route
            path="character/:id"
            element={<CharacterDetail characterDetail={characterFound} />}
          />
        ) : (
          <Route path="character/*" element={<NotFound />} />
        )}

        <Route path="/*" element={<NotFound />} />
        <Route path="character/*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
