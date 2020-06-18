import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";


it(`Render App`, () => {
  const tree = renderer
    .create(<App
      placesToStay={222}
      cardNames={ [{title: `Canal View Prinsengracht`, id: 3},
        {title: `Nice, cozy, warm big bed apartment`, id: 4}]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
