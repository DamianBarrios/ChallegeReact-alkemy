import React from "react";
import { useFormik } from "formik";

export const SearchHero = ({ setHeroeSearch }) => {
  const validate = (values) => {
    const errors = {};

    if (!values.search) {
      errors.search = "Required";
    } else if (values.search.length < 3) {
      errors.search = "Search more than 2 letters";
    } else if (!values.search.match(/^[A-Z]+$/i)) {
      errors.search = "Invalid search";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validate,
    onSubmit: (values, actions) => {
      setHeroeSearch(values.search);
    },
  });

  return (
    <nav className="navbar mt-5 mb-5">
      <div className="container-fluid">
        <form
          className="d-flex"
          action="onSubmit"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <input
              className="form-control me-2"
              type="search"
              id="search"
              placeholder="Find character"
              aria-label="Search"
              onChange={formik.handleChange}
            />
            {formik.errors.search ? (
              <div className="alert alert-danger p-1">
                {formik.errors.search}
              </div>
            ) : null}
          </div>
          <div>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchHero;
