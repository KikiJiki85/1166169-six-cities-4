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
    photo: `./img/apartment-01.jpg`,
    price: 120,
    title: `Wood and stone place`,
    type: `Private room`,
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
