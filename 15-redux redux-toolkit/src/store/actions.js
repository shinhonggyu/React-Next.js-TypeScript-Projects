export const incrementCount = () => {
  return {
    type: 'increment',
  };
};

export const increaseCount = () => {
  return {
    type: 'increase',
    amount: 5,
  };
};

export const decrementCount = () => {
  return {
    type: 'decrement',
  };
};
