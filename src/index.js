import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  PLACES_TO_STAY: 333,
};

const CardNames = [
  {title: `Beautiful & luxurious apartment at great location`, id: 1},
  {title: `Wood and stone place`, id: 2},
  {title: `Canal View Prinsengracht`, id: 3},
  {title: `Nice, cozy, warm big bed apartment`, id: 4}
];

ReactDOM.render(
    <App
      placesToStay = {Settings.PLACES_TO_STAY}
      cardNames = {CardNames}
    />,
    document.querySelector(`#root`)
);
