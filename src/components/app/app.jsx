import React from "react";
import MainPage from "../main-page/main-page.jsx";
import PropTypes from "prop-types";

const App = ({placesToStay, cardNames}) => {
  return (
    <MainPage placesToStay={placesToStay} cardNames={cardNames}/>
  );
};

App.propTypes = {
  placesToStay: PropTypes.number.isRequired,
  cardNames: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
      })
  ).isRequired
};

export default App;
