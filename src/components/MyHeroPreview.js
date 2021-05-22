import React, { useContext } from "react";

import { MyHeroesContext } from "./MyHeroesContext";

export const MyHeroPreview = () => {
  const { myHeroes, setMyHeroes } = useContext(MyHeroesContext);

  const onDoubleClick = (heroe) => {
    for (let i = 0; i < myHeroes.length; i++) {
      if (myHeroes[i].id === heroe.id) {
        myHeroes.splice(i, 1);
        setMyHeroes([...myHeroes]);
      }
    }
  };

  return (
    <div>
      {myHeroes.length !== 0 ? (
        <h6 className="d-flex justify-content-center m-0">My heroes</h6>
      ) : null}
      <ul className="nav d-flex align-items-center align-items-center ">
        {myHeroes.map((heroe) => {
          return (
            <li key={heroe.id}>
              <div className="col">
                <img
                  src={heroe.image.url}
                  alt={heroe.name}
                  className="hero-preview m-0"
                  onDoubleClick={() => {
                    onDoubleClick(heroe);
                  }}
                />
                <p>{heroe.name}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
