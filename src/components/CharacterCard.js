import React from "react";
import logo from "../images/Planet_Express_logo.svg";

const CharacterCard = (props) => {
  const getSpecie = () => {
    if (props.character.specie === "Martian") {
      return <i className="fas fa-rocket fa-specie"></i>;
    } else if (props.character.specie === "Human") {
      return <i className="fas fa-user fa-specie"></i>;
    } else if (props.character.specie === "Robot") {
      return <i className="fas fa-robot fa-specie"></i>;
    } else if (props.character.specie === "Mutant") {
      return <i className="fas fa-eye fa-specie"></i>;
    } else if (props.character.specie === "Decapodian") {
      return <i className="fas fa-ethernet fa-specie"></i>;
    } else if (props.character.specie === "Omicronian") {
      return <i className="fas fa-frog fa-specie"></i>;
    } else if (props.character.specie === "Amphibiosans") {
      return <i className="fas fa-hand-spock fa-specie"></i>;
    }
  };
  return (
    <li className="card">
      <div className="upper-container">
        <div className="card__image--container">
          <img
            className="card__image"
            src={props.character.picture}
            alt={props.character.name}
            title={props.character.name}
          />
        </div>
      </div>
      <div className="lower-container">
        <h4 className="card__title">{props.character.name}</h4>
        <p className="card__specie">
          {props.character.specie}
          {getSpecie()}
        </p>
        <div className="company">
          <img
            src={logo}
            alt="Planet Express logo"
            title="Planet Express"
            className="planet-logo"
          />
          <p>It's tentacular!</p>
        </div>
      </div>
    </li>
  );
};

export default CharacterCard;
