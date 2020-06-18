import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should header be pressed`, () => {
  const onHeaderClick = jest.fn();

  const card = shallow(
      <Card
        title={`Canal View Prinsengracht`}
        onHeaderClick={onHeaderClick}
      />
  );

  const placeCardHeader = card.find(`h2.place-card__name`);

  placeCardHeader.props().onClick();

  expect(onHeaderClick.mock.calls.length).toBe(1);
});
