import {createSelector} from "reselect";
import NameSpace from "../name-space.js";
import {getSortType} from "../app/selectors.js";
import {sortOffers} from "../../utils.js";

const NAME_SPACE = NameSpace.DATA;

const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

const getCity = (state) => {
  return state[NAME_SPACE].city;
};

const getFilteredOffers = createSelector(
    getOffers,
    getCity,
    getSortType,
    (resultOne, resultTwo, resultThree) => {
      const filteredOffers = resultOne.filter((it) => it.city.name === resultTwo);
      return sortOffers(filteredOffers, resultThree);
    }
);

const getLocations = createSelector(
    getOffers,
    (result) => {
      return Array.from(new Set(result.map((it) => it.city.name)));
    }
);

export {getOffers, getFilteredOffers, getLocations, getCity};
