import React from "react";
import logo from "../images/Planet_Express_logo.svg";

const CharacterCard = (props) => {
  const getSpecie = () => {
    if (props.character.specie === "Martian") {
      return <i class="fas fa-rocket"></i>;
    } else if (props.character.specie === "Human") {
      return <i class="fas fa-user"></i>;
    } else if (props.character.specie === "Robot") {
      return <i class="fas fa-robot"></i>;
    } else if (props.character.specie === "Mutant") {
      return <i class="fas fa-eye"></i>;
    } else if (props.character.specie === "Decapodian") {
      return <i class="fas fa-pastafarianism"></i>;
    } else if (props.character.specie === "Omicronian") {
      return <i class="fas fa-frog"></i>;
    } else if (props.character.specie === "Amphibiosans") {
      return <i class="fas fa-hand-spock"></i>;
    }
  };

  return (
    <li className="card">
      <div className="card__image--container">
        <img
          className="card__image"
          src={props.character.picture}
          alt={props.character.name}
          title={props.character.name}
        />
      </div>
      <h4 className="card__title">{props.character.name}</h4>

      <p className="card__specie">
        {props.character.specie} {getSpecie()}
      </p>

      <p className="card__origin">{props.character.origin}</p>
      <div className="company">
        <img
          src={logo}
          alt="Planet Express logo"
          title="Planet Express"
          className="planet-logo"
        />
        <p>It's tentacular!</p>
      </div>
    </li>
  );
};

export default CharacterCard;
