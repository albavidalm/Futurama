const getApiData = () => {
  return fetch("https://api.sampleapis.com/futurama/characters")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        //console.log(character.name);
        return {
          name: `${character.name.first} ${character.name.middle} ${character.name.last}`,
          id: character.id,
          picture: character.images.main,
          specie: character.species,
          origin: character.homePlanet,
          occupation: character.occupation,
          age: character.age,
        };
      });
      return cleanData;
    });
};
export default getApiData;
