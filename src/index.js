import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";

const Settings = {
  PLACES_TO_STAY: 333,
};

ReactDOM.render(
    <App
      placesToStay = {Settings.PLACES_TO_STAY}
      offers = {offers}
    />,
    document.querySelector(`#root`)
);
