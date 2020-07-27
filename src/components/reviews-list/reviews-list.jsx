import React from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-item/reviews-item.jsx";

const ReviewsList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => {
        return (
          <ReviewsItem
            key={review.id}
            review={review}
          />
        );
      })}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
