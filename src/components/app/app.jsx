import React from "react";
import MainPage from "../main-page/main-page.jsx";
import PropTypes from "prop-types";

const App = ({placesToStay, placeCardNameArr}) => {
  return (
    <MainPage placesToStay={placesToStay} placeCardNameArr={placeCardNameArr}/>
  );
};

App.propTypes = {
  placesToStay: PropTypes.number.isRequired,
  placeCardNameArr: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
