import React from "react";
import renderer from "react-test-renderer";
import CardsList from "./cards-list.jsx";


it(`Render CardsList`, () => {
  const tree = renderer
    .create(<CardsList
      cardNames={ [{title: `Canal View Prinsengracht`, id: 3},
        {title: `Nice, cozy, warm big bed apartment`, id: 4}]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
