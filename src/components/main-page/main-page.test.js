import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";


it(`Render MainPage`, () => {
  const tree = renderer
    .create(<MainPage
      placesToStay={222}
      cardNames={ [{title: `Canal View Prinsengracht`, id: 3},
        {title: `Nice, cozy, warm big bed apartment`, id: 4}]}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
