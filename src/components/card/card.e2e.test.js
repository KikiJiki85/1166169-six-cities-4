import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Card} from "./card.jsx";
import {CardType} from "../../const.js";

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
    isPremium: false,
    previewImage: `img/apartment-01.jpg`,
    isFavorite: false,
    pictures: [`./img/apartment-01.jpg`, `./img/apartment-02.jpg`, `./img/apartment-03.jpg`, `./img/room.jpg`],
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
    isPremium: true,
    previewImage: `img/apartment-03.jpg`,
    isFavorite: true,
    pictures: [`./img/apartment-02.jpg`, `./img/apartment-03.jpg`, `./img/room.jpg`],
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

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Card mouse input testing`, () => {
  const onActiveItemChange = jest.fn();
  const onFavoritesToggle = jest.fn();

  const card = shallow(
      <Card
        key={offers[0].id}
        offer={offers[0]}
        onActiveItemChange={onActiveItemChange}
        onFavoritesToggle={onFavoritesToggle}
        cardType={CardType.MAIN}
      />
  );

  const placeCardBookmark = card.find(`.place-card__bookmark-button`);

  it(`Should bookmark button registered, value is correct`, () => {
    placeCardBookmark.props().onClick();
    expect(onFavoritesToggle.mock.calls.length).toBe(1);
    expect(onFavoritesToggle.mock.calls[0][0]).toBe(offers[0].id, !offers[0].isFavorite);
  });

  it(`Should mouse enter registered, value is correct`, () => {
    card.props().onMouseEnter();
    expect(onActiveItemChange.mock.calls.length).toBe(1);
    expect(onActiveItemChange.mock.calls[0][0]).toBe(offers[0].id);
  });

  it(`Should mouse leave registered, value is correct`, () => {
    card.props().onMouseLeave();
    expect(onActiveItemChange.mock.calls.length).toBe(2);
    expect(onActiveItemChange.mock.calls[1][0]).toBe(-1);
  });
});
