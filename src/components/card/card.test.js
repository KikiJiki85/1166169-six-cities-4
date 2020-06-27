import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";

const offer = [
  {
    premium: false,
    photo: [`./img/apartment-01.jpg`, `./img/apartment-02.jpg`, `./img/apartment-03.jpg`, `./img/room.jpg`],
    price: 120,
    title: `Wood and stone place`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: `Room`,
    bedrooms: 3,
    maxGuests: 3,
    rating: 4.5,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
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
