import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import history from "../../../history.js";
import {PropertyPage} from "./property-page.jsx";

import testStore from "../../../mocks/tests-mock-store.js";

const TYPES = {
  apartment: `apartment`,
  room: `room`,
  house: `house`,
  hotel: `hotel`
};

const offers = [
  {
    id: 1,
    city: {
      name: `Amsterdam`,
      coordinates: [52.38333, 4.9],
      zoom: 12
    },
    title: `Beautiful & luxurious apartment at great location`,
    previewImage: `img/apartment-01.jpg`,
    pictures: [`img/apartment-01.jpg`, `img/room.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    price: 120,
    type: TYPES.apartment,
    rating: 4.8,
    isPremium: true,
    isFavorite: false,
    bedrooms: 2,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    guests: 3,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
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
    id: 5,
    city: {
      name: `Paris`,
      coordinates: [48.855931, 2.350962],
      zoom: 12
    },
    title: `Not bad!`,
    previewImage: `img/apartment-03.jpg`,
    pictures: [`img/apartment-03.jpg`, `img/room.jpg`, `img/studio-01.jpg`, `img/apartment-03.jpg`],
    price: 999,
    type: TYPES.hotel,
    rating: 3.2,
    isPremium: false,
    isFavorite: true,
    bedrooms: 1,
    description: `An independent House.`,
    guests: 1,
    features: [`Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
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
  }
];


const mockStore = configureStore([]);

it(`Render PropertyPage`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <PropertyPage
              match={{params: {id: `1`}}}
              offer={offers[0]}
              reviews={[]}
              nearby={offers}
              authStatus={`AUTH`}
              loadComments={() => {}}
              loadNearby={() => {}}
              postComment={() => {}}
              onFavoritesToggle={() => {}}
            />
          </Router>
        </Provider>,
        {
          createNodeMock: () => {
            return document.createElement(`div`);
          },
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
