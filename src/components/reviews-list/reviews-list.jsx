import React from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-item/reviews-item.jsx";

const ReviewsList = ({reviews, users}) => {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => {
        const user = users.find((it) => review.userId === it.id);
        return (
          <ReviewsItem
            key={review.id}
            review={review}
            user={user}
          />
        );
      })}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired
};

export default ReviewsList;
