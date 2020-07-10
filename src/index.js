import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";
import users from "./mocks/users.js";

const Settings = {
  PLACES_TO_STAY: 333,
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

ReactDOM.render(
    <Provider store = {store}>
      <App
        placesToStay = {Settings.PLACES_TO_STAY}
        offers = {offers}
        users = {users}
      />,
    </Provider>,
    document.querySelector(`#root`)
);
