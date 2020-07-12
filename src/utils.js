const MULTIPLIER = 20;

const getRating = (num) => {
  return Math.round(num) * MULTIPLIER;
};

const extend = (x, y) => {
  return Object.assign({}, x, y);
};

export {getRating, extend};
