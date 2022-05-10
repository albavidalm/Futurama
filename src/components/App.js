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
  }, []);

  //GUARDANDO EN LOCALSTORAGE -------------------------------
  useEffect(() => {
    ls.set("characters", characters);
  }, [characters]);

  useEffect(() => {
    ls.set("nameFilter", nameFilter);
  }, [nameFilter]);

  useEffect(() => {
    ls.set("specieFilter", specieFilter);
  }, [specieFilter]);

  useEffect(() => {
    ls.set("originFilter", originFilter);
  }, [originFilter]);

  useEffect(() => {
    ls.set("ordered", ordered);
  }, [ordered]);

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

  const renderCharacterDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.id);
    const foundCharacter = characters.find((character) => {
      return character.id === routeCharacterId;
    });
    //console.log("Router props: ", props.match.params.id, foundCharacter);
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      // Ruta para cuando se escribe mal en el navegador la id del character
      return (
        <>
          <Link className="goback" to="/">
            <i className="fas fa-chevron-circle-left"></i>
            Go back
          </Link>
          <NotFound />
        </>
      );
    }
  };

  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <main className="mainContent">
            <Filters handleFilter={handleFilter} handleReset={handleReset} />
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
