import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import getIconSpecie from "../services/getIconSpecie";

const CharacterDetail = ({ characterDetail }) => {
  const [saidValue, setSaidValue] = useState("");

  const said = () => {
    setSaidValue(
      characterDetail.sayings[
        Math.floor(Math.random() * characterDetail.sayings.length)
      ]
    );
  };
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
                <p className="boldtitle">Specie: </p>
                {getIconSpecie(characterDetail.specie)}
                {characterDetail.specie}
              </li>
              <li>
                <p className="boldtitle">Age: </p>
                {characterDetail.age}
              </li>
              <li>
                <p className="boldtitle">Origin: </p>
                {characterDetail.origin}
              </li>
              <li>
                <p className="boldtitle">Occupation: </p>
                {characterDetail.occupation}
              </li>

              <li>
                <p className="boldtitle">Said: </p>
                {!saidValue ? (
                  <p>{characterDetail.sayings[0]}</p>
                ) : (
                  <p>{saidValue}</p>
                )}
              </li>
            </ul>
            {characterDetail.sayings.length > 1 && (
              <button onClick={said} title="Press">
                Tell me more 🔀
              </button>
            )}
          </section>
        </div>
      </div>
    </article>
  );
};

export default CharacterDetail;
