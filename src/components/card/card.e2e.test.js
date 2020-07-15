import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Card} from "./card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const TYPES = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`
};

const offers = [
  {
    city: {
      name: `Amsterdam`,
      coordinates: [52.38333, 4.9]
    },
    premium: false,
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
    coordinates: [52.3909553943508, 4.85309666406198],
    reviews: [
      {
        id: 1,
        userId: 2,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
        rating: 4.3,
        date: `2019-04-24`
      },
      {
        id: 2,
        userId: 3,
        text: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        rating: 3.2,
        date: `2019-04-25`
      }
    ]
  },
  {
    city: {
      name: `Amsterdam`,
      coordinates: [52.38333, 4.9]
    },
    premium: true,
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
    coordinates: [52.369553943508, 4.85309666406198],
    reviews: [
      {
        id: 1,
        userId: 2,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
        rating: 4.3,
        date: `2019-04-24`
      },
      {
        id: 2,
        userId: 3,
        text: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        rating: 3.2,
        date: `2019-04-25`
      }
    ]
  },
];

it(`Should mouse point over card, header pressed`, () => {
  const onHeaderClick = jest.fn();
  const onCardMouseEnter = jest.fn();
  const onCardMouseLeave = jest.fn();

  const card = shallow(
      <Card
        offer={offers[0]}
        isNearPlaces={false}
        key={offers[0].id}
        onHeaderClick={onHeaderClick}
        onCardMouseEnter={onCardMouseEnter}
        onCardMouseLeave={onCardMouseLeave}
      />
  );

  const cardHeaderClick = card.find(`.place-card__name a`);

  cardHeaderClick.props().onClick();

  card.props().onMouseEnter();
  card.props().onMouseLeave();

  expect(onCardMouseEnter.mock.calls.length).toBe(1);
  expect(onCardMouseEnter.mock.calls[0][0]).toBe(offers[0].id);

  expect(onCardMouseLeave.mock.calls.length).toBe(1);

  expect(onHeaderClick.mock.calls.length).toBe(1);
  expect(onHeaderClick.mock.calls[0][0]).toBe(offers[0].id);
});
