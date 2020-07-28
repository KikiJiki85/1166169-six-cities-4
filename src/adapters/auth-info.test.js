import createOffer from "./auth-info.js";

const AuthInfoRaw = {
  [`avatar_url`]: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  [`is_pro`]: false,
  name: `Oliver.conner`
};

const AuthInfo = {
  avatar: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  pro: false,
  name: `Oliver.conner`
};

it(`Should offer adapter work correct`, () => {
  expect(createOffer(AuthInfoRaw)).toEqual(AuthInfo);
});
