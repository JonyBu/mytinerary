const defaultItinerary = {
  itineraries: [],
  error:[],
  message: [],
};

function reducer(state = defaultItinerary, action) {
  switch (action.type) {
    case "itinerariesAction":
      return {
        itineraries: action.payload,
        error: false,
      };
      case "ERROR":
        return {
          error: true,
          message: action.message
        };
    default:
      return state;
  }
}

export default reducer;
