import React, { lazy } from "react";
import PropTypes from "prop-types";
//import Loadable from "react-loadable";
//import loadable from "@loadable/component";

const Loading = ({ error }) => {
  return error ? (
    <div>An error occured component loading</div>
  ) : (
    <div>Loading...</div>
  );
};

Loading.propTypes = {
  error: PropTypes.object,
};

/**
 * code splitting using lazy loading
 */
export default (func) => lazy(func);

/**
 * code splitting using react-loadable
 */
/* export default (func) =>
  Loadable({
    loader: func,
    loading: Loading,
  }); */

/**
 * code splitting using @loadable/component
 */
//export default (func) => loadable(func, { fallback: Loading });
