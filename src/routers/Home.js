import React, { useContext, useState } from "react";
import { Switch } from "react-router-dom";

import { NavBar } from "../components/NavBar";
import { MyHeroes } from "../components/MyHeroes";
import { MyHeroesContext } from "../components/MyHeroesContext";
import { Search } from "../components/Search";
import { PrivateRoute } from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";

export const Home = () => {
  const [myHeroes, setMyHeroes] = useState([]);

  const { state } = useContext(AuthContext);

  return (
    <>
      <NavBar />
      <Switch>
        <MyHeroesContext.Provider
          value={{
            myHeroes,
            setMyHeroes,
          }}
        >
          <PrivateRoute
            exact
            path="/"
            component={MyHeroes}
            isAuthenticated={state.logged}
          />
          <PrivateRoute
            exact
            path="/searchHeroe"
            component={Search}
            isAuthenticated={state.logged}
          />
        </MyHeroesContext.Provider>
      </Switch>
    </>
  );
};

export default Home;
