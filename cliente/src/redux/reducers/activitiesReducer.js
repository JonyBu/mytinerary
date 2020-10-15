const defaultActivities = {
    activities: [],
    changeComment: []
}

function reducer(state = defaultActivities, action) {
    switch (action.type) {
        case 'activitiesAction':
            // console.log('activitiesAction-----------------', action.payload);
            // console.log(defaultActivities);

            return {
                ...state,
                activities: action.payload,
                changeComment: false
            }
        case 'ADD_COMMENT':
            console.log('addComment ----------------------', action)
            console.log(defaultActivities)
            return {
                ...state,
                activities: action.payload,
                changeComment: true
            }
        case 'DELETE_COMMENT':
            console.log('--------------delete comment--------------', action)
            return {
                ...state,
                changeComment: true
            }

        default:
            return state;
    }
}

export default reducer;