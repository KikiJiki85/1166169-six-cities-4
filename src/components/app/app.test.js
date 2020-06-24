import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const offers = [
  {
    premium: false,
    photo: `./img/apartment-01.jpg`,
    price: 120,
    title: `Wood and stone place`,
    type: `Private room`,
    id: 1
  },
  {
    premium: false,
    photo: `./img/apartment-01.jpg`,
    price: 120,
    title: `Wood and stone place`,
    type: `Private room`,
    id: 2
  }
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      placesToStay={222}
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
