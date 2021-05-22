import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";

export const NavBar = () => {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    history.replace("./login");

    dispatch({
      type: types.logout,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          SuperTeam App
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarsExample03">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <Link
              activeclassname="active"
              className="nav-link"
              aria-current="page"
              to="/"
            >
              My Heroes
            </Link>
            <Link
              activeclassname="active"
              className="nav-link"
              to="/searchHeroe"
            >
              Search
            </Link>
          </ul>
          <ul className="navbar-nav ml-auto">
            <button className="nav-item nav-link btn" onClick={handleLogout}>
              Log Out
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
