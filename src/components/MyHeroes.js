import React, { useContext, useEffect, useState } from "react";

import { HeroeGridItem } from "./HeroeGridItem";
import { MyHeroesContext } from "./MyHeroesContext";
import TeamStats from "./TeamStats";

export const MyHeroes = () => {
  const { myHeroes } = useContext(MyHeroesContext);
  const [home] = useState(true);

  useEffect(() => {
    myHeroes.map((heroe) => {
      localStorage.setItem("heroe", heroe);
    });
  }, [myHeroes]);

  return (
    <div>
      {myHeroes.length === 0 ? (
        <h2 className="m-3">¡Your team is empty!</h2>
      ) : (
        <div>
          <div>
            <TeamStats heroes={myHeroes} />
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {myHeroes.map((heroe, i) => {
              return <HeroeGridItem key={i} heroe={heroe} home={home} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};
