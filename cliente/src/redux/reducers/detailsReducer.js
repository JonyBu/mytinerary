const defaultDetails = {
    details: []
}

function reducer(state = defaultDetails, action){
    console.log(action)
    switch (action.type){
        case 'detailsAction':
            return {
                ...state,
                details:action.payload
            }
        default:
            return state;
    }
}

export default reducer;