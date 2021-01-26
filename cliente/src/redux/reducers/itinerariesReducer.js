const defaultItinerary = {
  itineraries: [],
  itFav: [],
  error: [],
  message: [],
};

function reducer(state = defaultItinerary, action) {
  switch (action.type) {
    case "itinerariesAction":
      return {
        ...state,
        itineraries: action.payload,
        error: false,
      };
    case "ERROR":
      return {
        error: true,
        message: action.message,
      };
    case "ITINERARIES_FAV":
      return {
        ...state,
        itFav: action.payload,
        error: false,
      };
    default:
      return state;
  }
}

export default reducer;
