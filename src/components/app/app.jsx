import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

import MainPage from "../main-page/main-page.jsx";
import PropertyPage from "../property-page/property-page.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";

const MainWrapped = withActiveItem(MainPage);

class App extends PureComponent {

  _renderApp() {
    const {offers, onChangeActiveOfferId, offerId} = this.props;

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
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  onChangeActiveOfferId: PropTypes.func.isRequired,
  offerId: PropTypes.any.isRequired,
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
    dispatch(ActionCreator.changeActiveOfferId(id));
  }
});

const mapStateToProps = (state) => {
  return {
    offers: state.offers,
    users: state.users,
    offerId: state.activeOfferId,
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
