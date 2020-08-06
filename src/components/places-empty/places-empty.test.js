import React from "react";
import renderer from "react-test-renderer";
import PlacesEmpty from "./places-empty.jsx";

it(`Render PlacesEmpty`, () => {
  const tree = renderer
    .create(
        <PlacesEmpty city={`Dusseldorf`}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
