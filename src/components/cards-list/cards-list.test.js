import React from "react";
import renderer from "react-test-renderer";
import CardsList from "./cards-list.jsx";

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

it(`Render CardsList`, () => {
  const tree = renderer
    .create(<CardsList
      offers={offers}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
