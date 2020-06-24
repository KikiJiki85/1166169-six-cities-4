import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";

const offer = [
  {
    premium: false,
    photo: `./img/apartment-01.jpg`,
    price: 120,
    title: `Wood and stone place`,
    type: `Private room`,
    id: 1
  }
];

it(`Render Card`, () => {
  const tree = renderer
    .create(
        <Card offer={offer[0]} key = {offer.id} onHeaderClick={() => {}} onCardMouseOver={() => {}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
