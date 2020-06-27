const MULTIPLIER = 20;

const getRating = (num) => {
  return Math.round(num) * MULTIPLIER;
};

export {getRating};
