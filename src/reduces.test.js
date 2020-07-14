import {reducer, ActionCreator, ActionType} from "./reducer.js";
import {SortTypes} from "./const.js";

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
  {
    city: {
      name: `Amsterdam`,
      coordinates: [52.38333, 4.9]
    },
    premium: false,
    favorite: false,
    photo: [`./img/apartment-03.jpg`, `./img/apartment-02.jpg`, `./img/room.jpg`],
    price: 122,
    title: `Nice, cozy, warm big bed apartment`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: TYPES.hotel,
    bedrooms: 1,
    maxGuests: 1,
    rating: 2.2,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`],
    id: 3,
    coordinates: [52.3909553943508, 4.929309666406198],
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
    premium: false,
    favorite: false,
    photo: [`./img/room.jpg`, `./img/apartment-02.jpg`, `./img/apartment-03.jpg`],
    price: 130,
    rating: 3.7,
    title: `Wood and stone place`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    type: TYPES.house,
    maxGuests: 3,
    bedrooms: 5,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Baby seat`, `Kitchen`, `Dishwasher`, `Fridge`],
    id: 4,
    coordinates: [52.3809553943508, 4.939309666406198],
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
    id: 5,
    city: {
      name: `Paris`,
      coordinates: [48.855931, 2.350962]
    },
    title: `Not bad!`,
    photo: [`img/apartment-03.jpg`, `img/room.jpg`, `img/studio-01.jpg`, `img/apartment-03.jpg`],
    price: 999,
    type: TYPES.hotel,
    rating: 3.2,
    premium: false,
    favorite: false,
    bedrooms: 1,
    descriptions: [
      `An independent House.`
    ],
    maxGuests: 1,
    features: [`Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    coordinates: [48.854082, 2.350379],
    reviews: [
      {
        id: 1,
        userId: 2,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 4.3,
        date: `2019-04-24`
      },
      {
        id: 2,
        userId: 3,
        text: `Very good`,
        rating: 3.2,
        date: `2019-04-25`
      }
    ]
  },
  {
    id: 6,
    city: {
      name: `Paris`,
      coordinates: [48.855931, 2.350962]
    },
    title: `So good!`,
    photo: [`img/apartment-03.jpg`, `img/room.jpg`, `img/studio-01.jpg`, `img/apartment-03.jpg`],
    price: 156,
    type: TYPES.apartment,
    rating: 3.2,
    premium: true,
    favorite: false,
    bedrooms: 1,
    descriptions: [
      `An independent House.`
    ],
    maxGuests: 1,
    features: [`Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    coordinates: [48.856906, 2.353950],
    reviews: [
      {
        id: 1,
        userId: 2,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 4.3,
        date: `2019-04-24`
      },
      {
        id: 2,
        userId: 3,
        text: `Very good`,
        rating: 3.2,
        date: `2019-04-25`
      }
    ]
  },
  {
    id: 7,
    city: {
      name: `Hamburg`,
      coordinates: [53.547699, 9.996888]
    },
    title: `Not bad!`,
    photo: [`img/apartment-03.jpg`, `img/room.jpg`, `img/studio-01.jpg`, `img/apartment-03.jpg`],
    price: 50,
    type: TYPES.apartment,
    rating: 3.8,
    premium: false,
    favorite: false,
    bedrooms: 1,
    descriptions: [
      `An independent House.`
    ],
    maxGuests: 1,
    features: [`Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    coordinates: [53.548738, 9.996824],
    reviews: [
      {
        id: 1,
        userId: 2,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 4.0,
        date: `2020-04-24`
      }
    ]
  },
];

const users = [
  {
    id: 1,
    avatar: `./img/avatar-angelina.jpg`,
    name: `Angelina`,
    pro: true
  },
  {
    id: 2,
    avatar: `./img/avatar-max.jpg`,
    name: `Viktor`,
    pro: false
  },
  {
    id: 3,
    avatar: `./img/avatar-angelina.jpg`,
    name: `Alex`,
    pro: false
  },
  {
    id: 4,
    avatar: `./img/avatar-max.jpg`,
    name: `Petya`,
    pro: false
  },
  {
    id: 5,
    avatar: `./img/avatar-max.jpg`,
    name: `Volodya`,
    pro: false
  },
  {
    id: 6,
    avatar: `./img/avatar-angelina.jpg`,
    name: `Tanos`,
    pro: false
  },
  {
    id: 7,
    avatar: `./img/avatar-angelina.jpg`,
    name: `Aleksander`,
    pro: false
  },
];

const locations = Array.from(new Set(offers.map((it) => it.city.name)));

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: offers[0].city.name,
    offers,
    locations: Array.from(new Set(offers.map((it) => it.city.name))),
    users,
    sortType: SortTypes.POPULAR,
    activeOfferId: null
  });
});

it(`Reducer should change city name by a given value`, () => {
  expect(reducer({
    city: offers[0].city.name,
    offers,
    locations,
    users
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Paris`,
  })).toEqual({
    city: `Paris`,
    offers,
    locations,
    users
  });
});

it(`Reducer should change sort type by a given value`, () => {
  expect(reducer({
    offers,
    locations,
    users,
    sortType: SortTypes.POPULAR
  }, {
    type: ActionType.CHANGE_SORT,
    payload: SortTypes.PRICE_HIGH_LOW,
  })).toEqual({
    offers,
    locations,
    users,
    sortType: SortTypes.PRICE_HIGH_LOW
  });
});

it(`Reducer should change active offer id by a given value`, () => {
  expect(reducer({
    offers,
    locations,
    users,
    sortType: SortTypes.POPULAR,
    activeOfferId: null
  }, {
    type: ActionType.CHANGE_ACTIVE_OFFER_ID,
    payload: 2,
  })).toEqual({
    offers,
    locations,
    users,
    sortType: SortTypes.POPULAR,
    activeOfferId: 2,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Paris`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Paris`,
    });
  });

  it(`Action creator for changing sort returns correct action`, () => {
    expect(ActionCreator.changeSort(SortTypes.TOP_RATED_FIRST)).toEqual({
      type: ActionType.CHANGE_SORT,
      payload: SortTypes.TOP_RATED_FIRST,
    });
  });

  it(`Action creator for changing offer id returns correct action`, () => {
    expect(ActionCreator.changeActiveOfferId(3)).toEqual({
      type: ActionType.CHANGE_ACTIVE_OFFER_ID,
      payload: 3,
    });
  });
});
