import React from "react";
import renderer from "react-test-renderer";
import {Navigation} from "./navigation.jsx";

const AuthInfo = {
  avatar: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  pro: false,
  name: `Oliver.conner`
};

it(`Render Navigation`, () => {
  const tree = renderer
    .create(
        <Navigation
          authStatus={`AUTH`}
          authInfo={AuthInfo}
          onChangeAuthPageState={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
