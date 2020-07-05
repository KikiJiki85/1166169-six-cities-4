import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";


const CardsList = (props) => {

  const {offers, isNearPlaces = false, onHeaderClick} = props;

  return (
    offers.map((offer) => {
      return (
        <Card
          offer = {offer}
          key = {offer.id}
          isNearPlaces={isNearPlaces}
          onHeaderClick={onHeaderClick}
        />
      );
    })
  );
};

CardsList.propTypes = {
  onHeaderClick: PropTypes.func.isRequired,
  isNearPlaces: PropTypes.bool,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        photo: PropTypes.arrayOf(PropTypes.string.isRequired),
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        premium: PropTypes.bool.isRequired
      })
  )
};

export default CardsList;
