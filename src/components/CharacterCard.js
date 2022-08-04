import React from "react";
import { Link } from "react-router-dom";
import getIconSpecie from "../services/getIconSpecie";
import logo from "../assets/images/Planet_Express_logo.svg";

const CharacterCard = ({ character }) => {
  return (
    <Link to={`/character/${character.id}`}>
      <li className="card">
        <div className="card__image--container">
          <img
            className="card__image"
            src={character.picture}
            alt={character.name}
            title={character.name}
          />
        </div>

        <div className="whiteback">
          <h4 className="card__title">{character.name}</h4>

          <p className="card__specie">
            {character.specie} {getIconSpecie(character.specie)}
          </p>

          <p className="card__origin">{character.origin}</p>
        </div>

        <div className="company">
          <img
            src={logo}
            alt="PlanetExpresslogo"
            title="Planet Express"
            className="planet-logo"
          />
          <p>It's tentacular!</p>
        </div>
      </li>
    </Link>
  );
};

export default CharacterCard;
