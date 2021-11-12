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
};
export default getApiData;
