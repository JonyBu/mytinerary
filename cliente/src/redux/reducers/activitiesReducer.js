const defaultActivities = {
    activities: []
}

function reducer(state = defaultActivities, action) {
    switch (action.type) {
        case 'activitiesAction':
            return {
                ...state,
                activities: action.payload
            }
        default:
            return state;
    }
}

export default reducer;