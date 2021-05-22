import React, { useState } from "react";
import { SearchHero } from "./SearchHero";
import { HeroGrid } from "./HeroGrid";
import { MyHeroPreview } from "./MyHeroPreview";

export const Search = () => {
  const [heroeSearch, setHeroeSearch] = useState();
  return (
    <div>
      <div className="bg-light d-flex justify-content-between align-middle">
        <SearchHero setHeroeSearch={setHeroeSearch} />
        <MyHeroPreview />
      </div>
      <div>
        {heroeSearch !== undefined ? (
          <HeroGrid heroeSearch={heroeSearch} home={null} />
        ) : null}
      </div>
    </div>
  );
};
