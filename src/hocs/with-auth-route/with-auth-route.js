import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import {getAuthStatus} from "../../reducer/user/selectors.js";

const withAuthRoute = (authStatus, Component, path) => {
  const WithPrivateRoute = (props) => {
    const {authStateStatus} = props;
    return authStateStatus === authStatus
      ? <Component {...props} />
      : <Redirect to={path} />;
  };

  WithPrivateRoute.propTypes = {
    authStateStatus: PropTypes.string.isRequired,
  };

  const mapStateToProps = (state) => {
    return {
      authStateStatus: getAuthStatus(state),
    };
  };

  return connect(mapStateToProps)(WithPrivateRoute);
};

export default withAuthRoute;
