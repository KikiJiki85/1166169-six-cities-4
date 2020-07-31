import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";

const TYPES = {
  apartment: `apartment`,
  room: `private Room`,
  house: `house`,
  hotel: `hotel`
};

const offers = [
  {
    city: {
      name: `Amsterdam`,
      coordinates: [52.38333, 4.9],
      zoom: 12
    },
    premium: false,
    previewImage: `img/apartment-01.jpg`,
    favorite: false,
    photo: [`./img/apartment-01.jpg`, `./img/apartment-02.jpg`, `./img/apartment-03.jpg`, `./img/room.jpg`],
    price: 120,
    title: `Wood and stone place`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: TYPES.room,
    bedrooms: 3,
    maxGuests: 3,
    rating: 4.5,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    id: 1,
    host: {
      avatar: `img/avatar-max.jpg`,
      id: 1,
      pro: false,
      name: `Max`
    },
    location: {
      coordinates: [52.3909553943508, 4.85309666406198],
      zoom: 10,
    },
  },
  {
    city: {
      name: `Amsterdam`,
      coordinates: [52.38333, 4.9],
      zoom: 12
    },
    premium: true,
    previewImage: `img/apartment-03.jpg`,
    favorite: true,
    photo: [`./img/apartment-02.jpg`, `./img/apartment-03.jpg`, `./img/room.jpg`],
    price: 80,
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    type: TYPES.apartment,
    bedrooms: 2,
    maxGuests: 2,
    rating: 3.1,
    features: [`Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    id: 2,
    host: {
      avatar: `img/avatar-angelina.jpg`,
      id: 4,
      pro: true,
      name: `Angelina`
    },
    location: {
      coordinates: [48.854082, 2.350379],
      zoom: 14,
    },

  },
];


const mockStore = configureStore([]);

it(`Render App`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      city: offers[0].city.name,
      offers,
      activeOfferId: -1,
      comments: [],
    },
    [NameSpace.APP]: {
      sortType: `popular`,
      showAuthPage: false,
    },
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      authInfo: {
        avatar: ``,
        email: ``,
        id: null,
        pro: null,
        name: ``,
      }
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App/>
        </Provider>,
        {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
