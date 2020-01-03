const initiaState = {
    currentUser: [],
    isConected: []
}

function reducer(state = initiaState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                currentUser: action.payload,
                isConected: true
            }
        case 'GET_USER':
            return {
                ...state,
                currentUser: action.payload,
                isConected: true
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                currentUser: {},
            }
        default:
            return state;
    }
}

export default reducer;