import axios from "axios";

export const getHeroes = async (heroeSearch) => {
  const data = await axios.get(
    `https://www.superheroapi.com/api.php/2238616219609368/search/${heroeSearch}`
  );

  const result = data.data.results;

  if (result !== undefined) {
    /* const heroes = result.map((data) => {
      return {
        id: data.id,
        image: data.image,
        name: data.name,
        powerstats: data.powerstats,
      };
    }); */
    return result;
  } else if (result === undefined && heroeSearch.length === 0) {
    return [];
  } else {
    alert("No se encontraron heroes");
    return [];
  }
};

export default getHeroes;
