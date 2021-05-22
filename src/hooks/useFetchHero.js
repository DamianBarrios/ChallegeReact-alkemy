import { useEffect, useState } from "react";
import getHeroes from "../helpers/getHeroes";

export const useFetchHeroes = (heroeSearch) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    getHeroes(heroeSearch).then((data) => {
      setState(data);
    });
  }, [heroeSearch]);

  return state;
};
