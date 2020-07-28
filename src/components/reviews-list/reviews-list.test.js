import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";

const reviews = [
  {
    id: 1,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    rating: 4.3,
    date: `2019-04-24`,
    user: {
      avatar: `img/1.png`,
      id: 5,
      pro: false,
      name: `Inna`,
    }
  },
  {
    id: 2,
    text: `Very good`,
    rating: 3.2,
    date: `2019-04-25`,
    user: {
      avatar: `img/1.png`,
      id: 4,
      pro: false,
      name: `Max`,
    }
  }
];

it(`Render ReviewList`, () => {
  const tree = renderer
    .create(
        <ReviewsList
          reviews={reviews}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
