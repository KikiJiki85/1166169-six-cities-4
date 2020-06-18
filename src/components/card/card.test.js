import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";


it(`Render Card`, () => {
  const tree = renderer
    .create(<Card title = {`Canal View Prinsengracht`} key = {5} onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
