const initiaState = {
    currentUser: {}
}

function reducer(state = initiaState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        case 'LOGOUT_USER':
            return { 
                ...state, 
                currentUser: action.payload
            }
        case 'GET_USER':
            return {
                ...state,
                currentUser: {}
            }

        default:
            return state;
    }
}

export default reducer;