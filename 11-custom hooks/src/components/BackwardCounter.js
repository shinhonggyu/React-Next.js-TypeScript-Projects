import useCounter from '../hooks/use-counter.js';

import Card from './Card';

const BackwardCounter = () => {
  // reusable and configurable by accepting arguments, parameters
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
