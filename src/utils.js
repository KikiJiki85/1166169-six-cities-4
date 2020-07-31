import {SortTypes, MONTH_NAMES} from "./const.js";

const MULTIPLIER = 20;

const getRating = (num) => {
  return Math.round(num) * MULTIPLIER;
};

const extend = (x, y) => {
  return Object.assign({}, x, y);
};

const sortOffers = (offers, sortType) => {
  let sortedOffers = [];

  switch (sortType) {
    case SortTypes.POPULAR:
      sortedOffers = offers;
      break;
    case SortTypes.PRICE_LOW_HIGH:
      sortedOffers = offers.slice().sort((a, b) => a.price - b.price);
      break;
    case SortTypes.PRICE_HIGH_LOW:
      sortedOffers = offers.slice().sort((a, b) => b.price - a.price);
      break;
    case SortTypes.TOP_RATED_FIRST:
      sortedOffers = offers.slice().sort((a, b) => b.rating - a.rating);
      break;
  }

  return sortedOffers;
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getMonthYearDate = (dateString) => {
  const date = new Date(dateString);
  return `${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
};

export {getRating, extend, sortOffers, capitalizeFirstLetter, getMonthYearDate};
