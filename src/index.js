import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  PLACES_TO_STAY: 333,
  PLACE_CARD_NAME_ARR:
    [`Beautiful & luxurious apartment at great location`,
      `Wood and stone place`,
      `Canal View Prinsengracht`,
      `Nice, cozy, warm big bed apartment`]
};

ReactDOM.render(
    <App
      placesToStay = {Settings.PLACES_TO_STAY}
      placeCardNameArr = {Settings.PLACE_CARD_NAME_ARR}
    />,
    document.querySelector(`#root`)
);
