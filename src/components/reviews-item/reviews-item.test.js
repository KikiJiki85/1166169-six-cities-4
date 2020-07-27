import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from "./reviews-item.jsx";


const users = [
  {
    id: 1,
    avatar: `./img/avatar-angelina.jpg`,
    name: `Angelina`,
    pro: true
  },
  {
    id: 2,
    avatar: `./img/avatar-max.jpg`,
    name: `Viktor`,
    pro: false
  },
  {
    id: 3,
    avatar: `./img/avatar-angelina.jpg`,
    name: `Alex`,
    pro: false
  },
  {
    id: 4,
    avatar: `./img/avatar-max.jpg`,
    name: `Petya`,
    pro: false
  },
];

const review = {
  id: 1,
  userId: 2,
  text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  rating: 4.3,
  date: `2019-04-24`
};

it(`Render ReviewsItem`, () => {
  const tree = renderer
    .create(
        <ReviewsItem
          key={review.id}
          review={review}
          user={users[0]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
