const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
};

const gamesReducer = (state = initState, action) => {
  if (action.type === 'FETCH_GAMES') {
    return {
      popular: action.payload.popular,
      newGames: action.payload.newGames,
      upcoming: action.payload.upcoming,
    };
  }
  return state;
};

export default gamesReducer;
