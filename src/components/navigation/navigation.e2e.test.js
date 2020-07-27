import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Navigation} from "./navigation.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const AuthInfo = {
  avatar: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  pro: false,
  name: `Oliver.conner`
};

it(`Test Navigation component items clicks and return value`, () => {
  const onChangeAuthPageState = jest.fn();

  const placesSorting = shallow(
      <Navigation
        authStatus={`AUTH`}
        authInfo={AuthInfo}
        onChangeAuthPageState={onChangeAuthPageState}
      />
  );

  const headerNavItem = placesSorting.find(`.user a`);

  headerNavItem.simulate(`click`, {
    preventDefault: () => {}
  });

  expect(onChangeAuthPageState).toHaveBeenCalledTimes(1);
  expect(onChangeAuthPageState).toHaveBeenCalledWith(true);
});
