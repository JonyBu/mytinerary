const defaultCity = {
  cities: [],
  isReady: [],
};

function reducer(state = defaultCity, action) {
  switch (action.type) {
    case "citiesAction":
      return {
        ...state,
        cities: action.payload,
        isReady: true,
      };
    case "UPDATE_CITIES":
      return {
        ...state,
        cities: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
