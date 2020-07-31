import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import {connect} from "react-redux";

import {ActionCreator as DataActionCreator} from "../../reducer/data/data.js";
import {getShowAuthPage} from "../../reducer/app/selectors.js";
import {getOffers, getActiveOfferId} from "../../reducer/data/selectors.js";

import withActiveItem from "../../hocs/with-active-item/with-active-item.js";

import MainPage from "../main-page/main-page.jsx";
import PropertyPage from "../property-page/property-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";

const MainWrapped = withActiveItem(MainPage);

class App extends PureComponent {

  _renderApp() {
    const {offers, onChangeActiveOfferId, offerId, showAuth} = this.props;

    if (showAuth) {
      return (
        <SignIn />
      );
    }
    if (offerId === -1) {
      return (
        <MainWrapped
          initActiveItemId={-1}
          onHeaderClick={onChangeActiveOfferId}
        />
      );
    } else {
      return (
        <PropertyPage offers={offers} offerId={offerId} onHeaderClick={onChangeActiveOfferId}/>
      );
    }
  }

  render() {
    const {offers, onChangeActiveOfferId} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/property">
            <PropertyPage offers={offers} offerId={1} onHeaderClick={onChangeActiveOfferId}/>
          </Route>
          <Route exact path="/signin">
            <SignIn
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  onChangeActiveOfferId: PropTypes.func.isRequired,
  offerId: PropTypes.any.isRequired,
  showAuth: PropTypes.bool.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        photo: PropTypes.arrayOf(PropTypes.string.isRequired),
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        premium: PropTypes.bool.isRequired
      })
  )
};

const mapDispatchToProps = (dispatch) => ({
  onChangeActiveOfferId(id) {
    dispatch(DataActionCreator.changeActiveOfferId(id));
  }
});

const mapStateToProps = (state) => {
  return {
    offers: getOffers(state),
    offerId: getActiveOfferId(state),
    showAuth: getShowAuthPage(state),
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
