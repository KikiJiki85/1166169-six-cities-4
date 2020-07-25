import React from "react";
import PropTypes from "prop-types";
import {getRating} from "../../utils.js";

const Card = ({offer, isNearPlaces, onHeaderClick, onActiveItemChange}) => {
  const {premium, favorite, previewImage, title, price, type, id, rating} = offer;

  return (
    <article onMouseEnter={() => onActiveItemChange(offer.id)} onMouseLeave={() => onActiveItemChange(-1)}
      className={`${isNearPlaces ? `near-places__card` : `cities__place-card`} place-card`}
    >
      {premium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}

      <div className={`${isNearPlaces ? `near-places__image-wrapper` : `cities__image-wrapper`} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src= {previewImage} width="260" height="200" alt= {title}/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{type}</span>
          </div>
          <button className={`place-card__bookmark-button button${favorite ? ` place-card__bookmark-button--active` : ``}`} type="button">
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
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    favorite: PropTypes.bool.isRequired
  }),
  onActiveItemChange: PropTypes.func.isRequired,
  isNearPlaces: PropTypes.bool.isRequired,
};

export default Card;
