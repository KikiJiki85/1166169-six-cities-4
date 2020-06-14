import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  PLACES_TO_STAY: 333
};

ReactDOM.render(
    <App
      placesToStay = {Settings.PLACES_TO_STAY}
    />,
    document.querySelector(`#root`)
);
