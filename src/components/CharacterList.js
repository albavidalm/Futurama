import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => {
    //console.log(character);
    return <CharacterCard key={character.id} character={character} />;
  });

  return <ul className="cards__character">{characterElements}</ul>;
};

export default CharacterList;
