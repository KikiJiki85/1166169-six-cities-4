import createOffer from "./offer.js";

const offersRaw = [
  {
    bedrooms: 1,
    city: {name: `Dusseldorf`, location: {latitude: 51.225402, longitude: 6.776314, zoom: 13}},
    description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
    goods: [`Air conditioning`, `Towels`, `Washer`, `Baby seat`, `Laptop friendly workspace`, `Breakfast`],
    host: {id: 25, name: `Angelina`, [`is_pro`]: true, [`avatar_url`]: `img/avatar-angelina.jpg`},
    id: 1,
    images: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`],
    [`is_favorite`]: false,
    [`is_premium`]: false,
    location: {latitude: 51.217402, longitude: 6.7693140000000005, zoom: 16},
    [`max_adults`]: 3,
    [`preview_image`]: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
    price: 282,
    rating: 5,
    title: `Wood and stone place`,
    type: `room`,
  }
];

const offersResult = [
  {
    bedrooms: 1,
    city: {name: `Dusseldorf`, coordinates: [51.225402, 6.776314], zoom: 13},
    description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
    features: [`Air conditioning`, `Towels`, `Washer`, `Baby seat`, `Laptop friendly workspace`, `Breakfast`],
    guests: 3,
    host: {avatar: `img/avatar-angelina.jpg`, id: 25, pro: true, name: `Angelina`},
    id: 1,
    isFavorite: false,
    isPremium: false,
    location: {coordinates: [51.217402, 6.7693140000000005], zoom: 16},
    pictures: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`],
    previewImage: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
    price: 282,
    rating: 5,
    title: `Wood and stone place`,
    type: `room`,
  }
];

it(`Should offer adapter work correct`, () => {
  expect(createOffer(offersRaw[0])).toEqual(offersResult[0]);
});
