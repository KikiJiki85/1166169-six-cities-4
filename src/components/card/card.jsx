import React from "react";
import PropTypes from "prop-types";
import {getRating} from "../../utils.js";

const Card = ({offer, onHeaderClick, onCardMouseOver}) => {
  const {premium, photo, title, price, type, id, rating} = offer;

  return (
    <article className="cities__place-card place-card" onMouseEnter={() => onCardMouseOver(id)}
    >
      {premium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src= {photo[0]} width="260" height="200" alt= {title}/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{type}</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRating(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a onClick={() => onHeaderClick(id)} href="#">{title}</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  onHeaderClick: PropTypes.func.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    photo: PropTypes.arrayOf(PropTypes.string.isRequired),
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired
  })
};

export default Card;
