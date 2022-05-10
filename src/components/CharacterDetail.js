import React from "react";
import getIconSpecie from "../services/getIconSpecie";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  let sayings = props.character.sayings;
  let said = sayings[Math.floor(Math.random() * sayings.length)];

  return (
    <article className="detail">
      <Link className="goback" to="/">
        <i className="fas fa-chevron-circle-left"></i>
        Go back
      </Link>

      <div className="detail__card">
        <img
          className="detail__card--img"
          src={props.character.picture}
          alt={`Imagen de ${props.character.name}`}
          title={props.character.name}
        />

        <div className="detail__card--info">
          <h2 className="detail__card--info-title">{props.character.name}</h2>
          <section>
            <ul className="detail__card--info-description">
              <li>
                <span className="boldtitle">Specie: </span>
                {getIconSpecie(props.character.specie)}
              </li>
              <li>
                <span className="boldtitle">Origin: </span>
                {props.character.origin}
              </li>
              <li>
                <span className="boldtitle">Occupation: </span>
                {props.character.occupation}
              </li>

              <li>
                <span className="boldtitle">Said: </span>
                {said}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
};

export default CharacterDetail;
