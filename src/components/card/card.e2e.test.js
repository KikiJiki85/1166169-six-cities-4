import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

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

it(`Should mouse point over card`, () => {
  const onCardMouseOver = jest.fn();

  const card = shallow(
      <Card
        offer={offer[0]}
        onHeaderClick={() => {}}
        onCardMouseOver={onCardMouseOver}
      />
  );

  card.props().onMouseEnter();

  expect(onCardMouseOver.mock.calls[0][0]).toBe(offer[0].id);
});
