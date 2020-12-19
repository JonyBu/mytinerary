const defaultCity = {
  cities: [],
  isReady: false,
};

function reducer(state = defaultCity, action) {
  switch (action.type) {
    case "citiesAction":
      return {
        ...state,
        cities: action.payload,
        isReady: true
      };

    default:
      return state;
  }
}

export default reducer;
