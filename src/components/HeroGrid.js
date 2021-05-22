import React from "react";
import { useFetchHeroes } from "../hooks/useFetchHero";
import { HeroeGridItem } from "./HeroeGridItem";

export const HeroGrid = ({ heroeSearch }) => {
  const data = useFetchHeroes(heroeSearch);
  return (
    <div className="bg-light">
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {data.map((heroe, i) => {
            return <HeroeGridItem key={i} heroe={heroe} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroGrid;
