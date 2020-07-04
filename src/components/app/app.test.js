import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const offers = [
  {
    premium: false,
    photo: [`./img/apartment-01.jpg`, `./img/apartment-02.jpg`, `./img/apartment-03.jpg`, `./img/room.jpg`],
    price: 120,
    title: `Wood and stone place`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: `Room`,
    bedrooms: 3,
    maxGuests: 3,
    rating: 4.5,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    id: 1,
    coordinates: [52.3909553943508, 4.85309666406198]
  },
  {
    premium: true,
    photo: [`./img/apartment-02.jpg`, `./img/apartment-03.jpg`, `./img/room.jpg`],
    price: 80,
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    type: `Apartment`,
    bedrooms: 2,
    maxGuests: 2,
    rating: 3.1,
    features: [`Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    id: 2,
    coordinates: [52.3909553943508, 4.85309666406198]
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
  }
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      placesToStay={222}
      offers={offers}
      users={users}
    />,
    {
      createNodeMock: () => {
        return document.createElement(`div`);
      }
    }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
