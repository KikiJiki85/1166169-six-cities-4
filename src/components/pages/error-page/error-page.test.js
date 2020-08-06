import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import history from "../../../history.js";
import {ErrorPage} from "./error-page.jsx";

import testStore from "../../../mocks/tests-mock-store.js";

const mockStore = configureStore([]);

it(`Render ErrorPage`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <ErrorPage errorText={`Test error`}/>
          </Router>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
