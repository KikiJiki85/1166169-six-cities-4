import React from "react";
import MainPage from "../main-page/main-page.jsx";
import PropTypes from "prop-types";

const headerClickHandler = () => {};

const App = ({placesToStay, offers}) => {
  return (
    <MainPage placesToStay={placesToStay} offers={offers} onHeaderClick={headerClickHandler}/>
  );
};

App.propTypes = {
  placesToStay: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        premium: PropTypes.bool.isRequired
      })
  )
};

export default App;
