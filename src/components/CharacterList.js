import React from "react";
import CharacterCard from "./CharacterCard";
import NotFoundSearch from "./NotFoundSearch";

const CharacterList = ({
  characters,
  nameFilter,
  specieFilter,
  originFilter,
  handleReset,
}) => {
  const characterElements = characters.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  if (characters.length === 0) {
    return (
      <NotFoundSearch
        search={nameFilter}
        specieFilter={specieFilter}
        originFilter={originFilter}
        handleReset={handleReset}
      />
    );
  }

  return <ul className="cards__character">{characterElements}</ul>;
};

export default CharacterList;
