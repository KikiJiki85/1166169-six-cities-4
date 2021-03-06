import React from "react";
import renderer from "react-test-renderer";
import {LocationsList} from "./locations-list.jsx";

it(`Render LocationsList`, () => {
  const tree = renderer
    .create(
        <LocationsList
          locations={[`Amsterdam`, `Paris`, `London`]}
          onCityChange={() => {}}
          city={`Paris`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
