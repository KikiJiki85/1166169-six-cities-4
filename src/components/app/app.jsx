import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import {connect} from "react-redux";

import MainPage from "../main-page/main-page.jsx";
import PropertyPage from "../property-page/property-page.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";

const MainWrapped = withActiveItem(MainPage);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.onHeaderClick = this.onHeaderClick.bind(this);
    this.state = {
      offerId: -1
    };
  }

  onHeaderClick(id) {
    this.setState({
      offerId: id
    });
  }

  _renderApp() {
    const {offers, users} = this.props;

    if (this.state.offerId === -1) {
      return (
        <MainWrapped
          initActiveItemId={-1}
          onHeaderClick={this.onHeaderClick}
        />
      );
    } else {
      return (
        <PropertyPage offers={offers} users={users} offerId={this.state.offerId} onHeaderClick={this.onHeaderClick}/>
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
            <PropertyPage offers={offers} users={users} offerId={1} onHeaderClick={this.onHeaderClick}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  users: PropTypes.array.isRequired,
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

const mapStateToProps = (state) => {
  return {
    offers: state.offers,
    users: state.users
  };
};

export {App};
export default connect(mapStateToProps, null)(App);
