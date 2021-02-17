const defaultItinerary = {
  itineraries: [],
  newItinerary: [],
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
    case "ADD_ITINERARY":
      return {
        ...state,
        newItinerary: action.payload,
        error: false,
      };
    default:
      return state;
  }
}

export default reducer;
