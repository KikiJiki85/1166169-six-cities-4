import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";

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

it(`Render MainPage`, () => {
  const tree = renderer
    .create(<MainPage
      placesToStay={222}
      offers = {offers}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
