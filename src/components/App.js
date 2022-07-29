import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import NotFound from "./NotFound";
import getApiData from "../services/getApiData";
import ls from "../services/local-storage";
//import ResetButton from "./ResetButton";

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

  //COMPROBANDO SI HAY DATOS EN EL LOCALSTORAGE -------------
  useEffect(() => {
    if (characters.length === 0) {
      getApiData().then((charactersData) => {
        setCharacters(charactersData);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //GUARDANDO EN LOCALSTORAGE -------------------------------
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

  //Dynamic route
  const renderCharacterDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.id);

    const foundCharacter = characters.find(
      (character) => character.id === parseInt(routeCharacterId)
    );
    //console.log("Router props: ", props.match.params.id, foundCharacter);

    if (foundCharacter) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <NotFound />; //The ID doesn't exists
    }
  };

  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <main className="mainContent">
            <Filters
              nameFilter={nameFilter}
              specieFilter={specieFilter}
              originFilter={originFilter}
              orderFilter={ordered}
              handleFilter={handleFilter}
              handleReset={handleReset}
            />
            {/* <ResetButton handleReset={handleReset} /> */}

            <CharacterList characters={filteredCharacters} />
          </main>
        </Route>

        <Route path="/character/:id" render={renderCharacterDetail} />

        <Route>
          <NotFound />
        </Route>
      </Switch>

      <Footer />
    </>
  );
};

export default App;
