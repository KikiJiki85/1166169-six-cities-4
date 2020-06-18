import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";


const CardsList = ({cardNames, onHeaderClick}) => {
  const elements = cardNames.map((item) => {
    return (
      <Card title = {item.title} key = {item.id} onHeaderClick={onHeaderClick}/>
    );
  });

  return (
    <div className="cities__places-list places__list tabs__content">
      {elements}
    </div>
  );
};
CardsList.propTypes = {
  cardNames: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
      })
  ).isRequired,
  onHeaderClick: PropTypes.func.isRequired
};

export default CardsList;
