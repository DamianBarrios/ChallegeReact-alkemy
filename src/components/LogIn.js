import React, { useContext } from "react";
import { useFormik } from "formik";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";

export const LogIn = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      axios
        .post("http://challenge-react.alkemy.org/", values)
        .then((data) => {
          dispatch({
            type: types.login,
            payload: {
              token: data.data.token,
            },
          });

          history.replace("/");
        })
        .catch((error) => {
          alert("User not found");
        });
    },
  });

  return (
    <div className="text-center">
      <form onSubmit={formik.handleSubmit}>
        <img
          className="m-4"
          src="https://www.alkemy.org/assets/images/logo-header.png"
          alt=""
        />
        <h1 className="h3 mb-5 fw-normal">Please sign in</h1>

        <div className="col-6 d-inline-block justify-content-center">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <div className="alert alert-danger p-1">
                {formik.errors.email}
              </div>
            ) : null}
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? (
              <div className="alert alert-danger p-1">
                {formik.errors.password}
              </div>
            ) : null}
            <label htmlFor="password">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
