import React, { useState, useEffect } from "react";

const TeamStats = ({ heroes }) => {
  const [fullStats, setFullStats] = useState([]);
  const [prom, setProm] = useState([]);

  useEffect(() => {
    let int = 0,
      str = 0,
      spe = 0,
      dur = 0,
      pow = 0,
      com = 0,
      height = 0,
      weight = 0;

    heroes.map((heroe) => {
      return (
        heroe.powerstats.intelligence !== "null"
          ? (int = int + parseInt(heroe.powerstats.intelligence))
          : (int = int + 0),
        heroe.powerstats.strength !== "null"
          ? (str = str + parseInt(heroe.powerstats.strength))
          : (str = str + 0),
        heroe.powerstats.speed !== "null"
          ? (spe = spe + parseInt(heroe.powerstats.speed))
          : (spe = spe + 0),
        heroe.powerstats.durability !== "null"
          ? (dur = dur + parseInt(heroe.powerstats.durability))
          : (dur = dur + 0),
        heroe.powerstats.power !== "null"
          ? (pow = pow + parseInt(heroe.powerstats.power))
          : (pow = pow + 0),
        heroe.powerstats.combat !== "null"
          ? (com = com + parseInt(heroe.powerstats.combat))
          : (com = com + 0),
        heroe.appearance.height[1] !== "null"
          ? (height =
              height + parseInt(heroe.appearance.height[1]) / heroes.length)
          : (height = height + 0),
        heroe.appearance.weight[1] !== "null"
          ? (weight =
              weight + parseInt(heroe.appearance.weight[1]) / heroes.length)
          : (weight = weight + 0)
      );
    });

    setFullStats([
      { stat: "Intelligence", value: int },
      { stat: "Strength", value: str },
      { stat: "Speed", value: spe },
      { stat: "Durability", value: dur },
      { stat: "Power", value: pow },
      { stat: "Combat", value: com },
    ]);

    setProm([
      { stat: "Average Weight", value: `${weight.toFixed(2)} kg` },
      { stat: "Average Height", value: `${height.toFixed(2)} cm` },
    ]);
  }, [heroes]);

  fullStats.sort(function (a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });
  fullStats.reverse();

  return (
    <div>
      <div className="stats">
        <div className="d-flex justify-content-between">
          <h2 className="mb-4">My Team Stats</h2>
          <div className="d-inline-flex justify-content-between">
            {prom.map((prom, i) => {
              return (
                <div key={i} className="ml-4">
                  <h5>{prom.stat}</h5> <h5>{prom.value}</h5>
                </div>
              );
            })}
          </div>
        </div>

        {fullStats.length === 0 ? null : (
          <div className="row d-flex justify-content-between">
            {fullStats.map((stats, i) => {
              return (
                <div>
                  <div key={i} className={`stat${i} col col-12 col-sm-6`}>
                    <h5>{stats.stat}</h5> <h5>{stats.value}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default TeamStats;
