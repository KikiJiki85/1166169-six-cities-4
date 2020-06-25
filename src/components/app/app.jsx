import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Route, BrowserRouter, Switch} from "react-router-dom";

import MainPage from "../main-page/main-page.jsx";
import PropertyPage from "../property-page/property-page.jsx";

const headerClickHandler = () => {};

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {placesToStay, offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainPage placesToStay={placesToStay} offers={offers} onHeaderClick={headerClickHandler}/>
          </Route>
          <Route exact path="/property">
            <PropertyPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  placesToStay: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        premium: PropTypes.bool.isRequired
      })
  )
};

