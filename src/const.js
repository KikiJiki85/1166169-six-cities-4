const MAX_REVIEWS = 10;

const SortTypes = {
  POPULAR: `popular`,
  PRICE_LOW_HIGH: `priceLowHigh`,
  PRICE_HIGH_LOW: `priceHighLow`,
  TOP_RATED_FIRST: `topRatedFirst`
};

const SortTypeTexts = {
  [SortTypes.POPULAR]: `Popular`,
  [SortTypes.PRICE_LOW_HIGH]: `Price: low to high`,
  [SortTypes.PRICE_HIGH_LOW]: `Price: high to low`,
  [SortTypes.TOP_RATED_FIRST]: `Top rated first`,
};

const MONTH_NAMES = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

const AppRoute = {
  LOGIN: `/login`,
  ROOT: `/`,
  FAVORITES: `/favorites`,
  OFFER: `/offer`,
  ERROR: `/error`,
};

const Error = {
  UNAUTHORIZED: 401
};

const CardType = {
  MAIN: `MAIN`,
  PROPERTY: `PROPERTY`,
  FAVORITES: `FAVORITES`,
};

const Type = {
  apartment: `apartment`,
  room: `room`,
  house: `house`,
  hotel: `hotel`,
};

export {SortTypes, SortTypeTexts, MONTH_NAMES, AppRoute, Error, CardType, Type, MAX_REVIEWS};
