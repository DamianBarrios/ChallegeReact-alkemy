import React, { useContext, useState, useEffect } from "react";
import { MyHeroesContext } from "./MyHeroesContext";
import { HeroDetails } from "./HeroDetails";

import { Icon } from "@iconify/react";
import brainIcon from "@iconify-icons/fa-solid/brain";
import armFlex from "@iconify-icons/mdi/arm-flex";
import bxRun from "@iconify-icons/bx/bx-run";
import timerSandFull from "@iconify-icons/mdi/timer-sand-full";
import powerIcon from "@iconify-icons/subway/power";
import fistRaised from "@iconify-icons/fa-solid/fist-raised";

export const HeroeGridItem = ({ heroe, home }) => {
  const { id, image, name, powerstats } = heroe;
  const { intelligence, strength, speed, durability, power, combat } =
    powerstats;
  const { myHeroes, setMyHeroes } = useContext(MyHeroesContext);
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);

  useEffect(() => {
    let good = 0;
    let bad = 0;
    myHeroes.map((heroe) => {
      if (heroe.biography.alignment === "good") {
        good = good + 1;
      } else if (heroe.biography.alignment === "bad") {
        bad = bad + 1;
      }
    });
    setGood(good);
    setBad(bad);
    return;
  }, [myHeroes]);

  const onClickAdd = () => {
    if (myHeroes.length <= 5) {
      if (heroe.biography.alignment === "good" && good <= 2) {
        setMyHeroes([...myHeroes, heroe]);
      } else if (heroe.biography.alignment === "bad" && bad <= 2) {
        setMyHeroes([...myHeroes, heroe]);
      } else if (heroe.biography.alignment === "neutral") {
        setMyHeroes([...myHeroes, heroe]);
      } else if (heroe.biography.alignment === "good") {
        alert("You already have three 'good' characters");
      } else {
        alert("You already have three 'bad' characters");
      }
    } else {
      alert("¡Your team is full!");
      setMyHeroes([...myHeroes]);
    }

    for (let i = 0; i < myHeroes.length; i++) {
      if (myHeroes[i].id === id) {
        alert("¡This character is already in your team!");
        setMyHeroes([...myHeroes]);
      }
    }
  };
  const onClickRemove = () => {
    for (let i = 0; i < myHeroes.length; i++) {
      if (myHeroes[i].id === id) {
        myHeroes.splice(i, 1);
        setMyHeroes([...myHeroes]);
      }
    }
  };

  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="card-header">
          <div className="col">
            <img src={image.url} className="img-thumbnail" alt={name} />
          </div>
          <div className="card-hero-stats">
            <div>
              <Icon icon={brainIcon} />
              {intelligence !== "null" ? intelligence : 0}
            </div>
            <div>
              <Icon icon={armFlex} />
              {strength !== "null" ? strength : 0}
            </div>
            <div>
              <Icon icon={bxRun} />
              {speed !== "null" ? speed : 0}
            </div>
            <div>
              <Icon icon={timerSandFull} />
              {durability !== "null" ? durability : 0}
            </div>
            <div>
              <Icon icon={powerIcon} />
              {power !== "null" ? power : 0}
            </div>
            <div>
              <Icon icon={fistRaised} />
              {combat !== "null" ? combat : 0}
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="py-1 mb-3">
            <div className="d-flex justify-content-center">
              <h3>{name}</h3>
            </div>
          </div>
          <div>
            {home ? (
              <div className="d-flex justify-content-around">
                <button
                  type="button"
                  className="btn btn-sm btn-danger "
                  onClick={onClickRemove}
                >
                  Delete
                </button>
                <HeroDetails heroe={heroe} />
              </div>
            ) : (
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-success"
                  onClick={onClickAdd}
                >
                  Add
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
