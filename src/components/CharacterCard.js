import React from "react";
import { Link } from "react-router-dom";
import getIconSpecie from "../services/getIconSpecie";
import logo from "../images/Planet_Express_logo.svg";

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.character.id}`}>
      <li className="card">
        <div className="card__image--container">
          <img
            className="card__image"
            src={props.character.picture}
            alt={props.character.name}
            title={props.character.name}
          />
        </div>

        <div className="whiteback">
          <h4 className="card__title">{props.character.name}</h4>

          <p className="card__specie">
            {props.character.specie} {getIconSpecie(props.character.specie)}
          </p>

          <p className="card__origin">{props.character.origin}</p>
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
