import React from "react";
import PropTypes from "prop-types";
import {getRating, getMonthYearDate} from "../../utils.js";

const ReviewsItem = ({review}) => {

  const {comment, rating, date, user} = review;
  const {avatar, name} = user;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRating(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{getMonthYearDate(date)}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.any.isRequired,
    comment: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.any.isRequired,
      name: PropTypes.string.isRequired,
      pro: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
};

export default ReviewsItem;
