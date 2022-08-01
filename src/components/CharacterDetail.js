import React from "react";
import getIconSpecie from "../services/getIconSpecie";
import { Link } from "react-router-dom";

const CharacterDetail = ({ characterDetail }) => {
  let sayings = characterDetail.sayings;
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
          src={characterDetail.picture}
          alt={`Imagen de ${characterDetail.name}`}
          title={characterDetail.name}
        />

        <div className="detail__card--info">
          <h2 className="detail__card--info-title">{characterDetail.name}</h2>
          <section>
            <ul className="detail__card--info-description">
              <li>
                <span className="boldtitle">Specie: </span>
                {getIconSpecie(characterDetail.specie)}
              </li>
              <li>
                <span className="boldtitle">Origin: </span>
                {characterDetail.origin}
              </li>
              <li>
                <span className="boldtitle">Occupation: </span>
                {characterDetail.occupation}
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
