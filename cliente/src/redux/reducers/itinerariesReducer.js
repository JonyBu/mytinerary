const defaultItinerary = {
    itineraries: []
}

function reducer(state = defaultItinerary, action) {

    switch (action.type) {
        case 'itinerariesAction':
            return {
                ...state,
                itineraries: action.payload
            }
        default:
            return state;
    }
}

export default reducer;