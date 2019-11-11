const defaultCity = {
    cities: []  
}

function reducer(state = defaultCity, action) {
    console.log(action)
    switch (action.type) {
        case 'citiesAction': 
            return {
                ...state,
                cities:action.payload
            } 
        
        default:
            return state;
    }
}

export default reducer;