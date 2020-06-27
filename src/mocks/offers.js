const TYPES = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`
};

export default [
  {
    premium: false,
    photo: [`./img/apartment-01.jpg`, `./img/apartment-02.jpg`, `./img/apartment-03.jpg`, `./img/room.jpg`],
    price: 120,
    title: `Wood and stone place`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: TYPES.room,
    bedrooms: 3,
    maxGuests: 3,
    rating: 4.5,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    id: 1
  },
  {
    premium: true,
    photo: [`./img/apartment-02.jpg`, `./img/apartment-03.jpg`, `./img/room.jpg`],
    price: 80,
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    type: TYPES.apartment,
    bedrooms: 2,
    maxGuests: 2,
    rating: 3.1,
    features: [`Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    id: 2
  },
  {
    premium: false,
    photo: [`./img/apartment-03.jpg`, `./img/apartment-02.jpg`, `./img/room.jpg`],
    price: 122,
    title: `Nice, cozy, warm big bed apartment`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: TYPES.hotel,
    bedrooms: 1,
    maxGuests: 1,
    rating: 2.2,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`],
    id: 3
  },
  {
    premium: false,
    photo: [`./img/room.jpg`, `./img/apartment-02.jpg`, `./img/apartment-03.jpg`],
    price: 130,
    rating: 3.7,
    title: `Wood and stone place`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    type: TYPES.house,
    maxGuests: 3,
    bedrooms: 5,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Baby seat`, `Kitchen`, `Dishwasher`, `Fridge`],
    id: 4
  },
];
