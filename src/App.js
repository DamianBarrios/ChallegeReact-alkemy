import React, { useEffect, useReducer } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { LogIn } from "./components/LogIn";
import { Home } from "./routers/Home";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";

import { PublicRoute } from "./routers/PublicRoute";

const init = () => {
  return (
    JSON.parse(localStorage.getItem("user")) || {
      logged: false,
    }
  );
};

function App() {
  const [state, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state));
  }, [state]);

  return (
    <Router>
      <div>
        <AuthContext.Provider value={{ state, dispatch }}>
          <Switch>
            <PublicRoute
              exact
              path="/login"
              component={LogIn}
              isAuthenticated={state.logged}
            />
            <Route path="/" component={Home} />
          </Switch>
        </AuthContext.Provider>
      </div>
    </Router>
  );
}

export default App;
