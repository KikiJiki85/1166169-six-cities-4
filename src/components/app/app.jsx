import React from "react";
import {Router, Route, Switch} from "react-router-dom";

import history from "../../history.js";
import {AppRoute} from "../../const.js";
import {AuthorizationStatus} from "../../reducer/user/user";

import MainPage from "../pages/main-page/main-page.jsx";
import ErrorPage from "../pages/error-page/error-page.jsx";
import PropertyPage from "../pages/property-page/property-page.jsx";
import SignInPage from "../pages/sign-in-page/sign-in-page.jsx";
import FavoritesPage from "../pages/favorites-page/favorites-page.jsx";
import withAuthRoute from "../../hocs/with-auth-route/with-auth-route.js";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";

const FavoritesPageWrapped = withAuthRoute(AuthorizationStatus.AUTH, FavoritesPage, AppRoute.LOGIN);
const SignInPageWrapped = withActiveItem(withAuthRoute(AuthorizationStatus.NO_AUTH, SignInPage, AppRoute.ROOT));

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.LOGIN} component={SignInPageWrapped}/>
        <Route exact path={`${AppRoute.OFFER}/:id`} component={PropertyPage} />
        <Route exact path={AppRoute.FAVORITES} component={FavoritesPageWrapped} />
        <Route path={AppRoute.ERROR} component={ErrorPage}/>
        <Route path={AppRoute.ROOT} component={MainPage}/>
      </Switch>
    </Router>
  );
};

export default App;
