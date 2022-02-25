const getApiData = () => {
  return fetch("https://api.sampleapis.com/futurama/characters")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        // console.log(character.homePlanet);
        return {
          name: `${character.name.first} ${character.name.middle} ${character.name.last}`.trimStart(),
          id: character.id,
          picture: character.images.main,
          specie: character.species,
          origin: character.homePlanet || "Unknown",
          occupation: character.occupation,
          age: character.age,
        };
      });
      return cleanData;
    });

  // return fetch(
  //   "https://api.tvmaze.com/singlesearch/shows?q=futurama&embed=cast"
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     //console.log(data);
  //     const cleanData = data._embedded.cast.map((personaje) => {
  //       // console.log(personaje.character);
  //       return {
  //         name: personaje.character.name,
  //         id: personaje.character.id,
  //         picture: personaje.character.image.medium,
  //         specie: personaje.species,
  //         origin: personaje.character.homePlanet || "Unknown",
  //         occupation: personaje.character.occupation,
  //         age: personaje.character.age,
  //       };
  //     });
  //     return cleanData;
  //   });

  // return fetch("https://api.tvmaze.com/shows/538/cast")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     const cleanData = data.map((personaje) => {
  //       // console.log(personaje.character);
  //       return {
  //         name: personaje.character.name,
  //         id: personaje.character.id,
  //         picture: personaje.character.image.medium,
  //         specie: personaje.species,
  //         origin: personaje.character.homePlanet || "Unknown",
  //         occupation: personaje.character.occupation,
  //         age: personaje.character.age,
  //       };
  //     });
  //     return cleanData;
  //   });
};
export default getApiData;
