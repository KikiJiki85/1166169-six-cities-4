import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Route, BrowserRouter, Switch} from "react-router-dom";

import MainPage from "../main-page/main-page.jsx";
import PropertyPage from "../property-page/property-page.jsx";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this._onHeaderClick = this._onHeaderClick.bind(this);
    this.state = {
      offerId: -1
    };
  }

  _onHeaderClick(id) {
    this.setState({
      offerId: id
    });
  }

  _renderApp() {
    const {placesToStay, offers, users} = this.props;

    if (this.state.offerId === -1) {
      return (
        <MainPage placesToStay={placesToStay} offers={offers} onHeaderClick={this._onHeaderClick}/>
      );
    } else {
      return (
        <PropertyPage offerId = {this.state.offerId} offers={offers} users={users}/>
      );
    }
  }

  render() {
    const {offers, users} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/property">
            <PropertyPage offerId = {2} offers={offers} users={users} />
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
        photo: PropTypes.arrayOf(PropTypes.string.isRequired),
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        premium: PropTypes.bool.isRequired
      })
  ),
  users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        pro: PropTypes.bool.isRequired
      })
  )
};

