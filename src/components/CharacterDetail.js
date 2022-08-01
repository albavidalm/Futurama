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
    <>
      <Link className="goback" to="/">
        <i className="fas fa-chevron-circle-left"></i>
        Go back
      </Link>
      <article className="detail">
        <img
          className="detail__img"
          src={characterDetail.picture}
          alt={`Imagen de ${characterDetail.name}`}
          title={characterDetail.name}
        />

        <div className="detail__info">
          <h2 className="detail__info--title">{characterDetail.name}</h2>
          <section>
            <ul>
              <li className="detail__info--description">
                <p className="detail__info--description--text">Specie: </p>
                {getIconSpecie(characterDetail.specie)}
                {characterDetail.specie}
              </li>
              <li className="detail__info--description">
                <p className="detail__info--description--text">Age: </p>
                {characterDetail.age}
              </li>
              <li className="detail__info--description">
                <p className="detail__info--description--text">Origin: </p>
                {characterDetail.origin}
              </li>
              <li className="detail__info--description">
                <p className="detail__info--description--text">Occupation: </p>
                {characterDetail.occupation}
              </li>

              <li className="detail__info--description said">
                <p className="detail__info--description--text">Said: </p>
                <div className="detail__info--description--random">
                  {!saidValue ? (
                    <p>{characterDetail.sayings[0]}</p>
                  ) : (
                    <p>{saidValue}</p>
                  )}
                  {characterDetail.sayings.length > 1 && (
                    <button onClick={said} title="Press">
                      Tell me more 🔀
                    </button>
                  )}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
};

export default CharacterDetail;
