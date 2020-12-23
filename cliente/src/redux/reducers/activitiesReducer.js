const defaultActivities = {
  activities: [],
  changeComment: [],
};

function reducer(state = defaultActivities, action) {
  switch (action.type) {
    case "activitiesAction":
      return {
        ...state,
        activities: action.payload,
        changeComment: false,
      };
    case "ADD_COMMENT":
      return {
        ...state,
        activities: action.payload,
        changeComment: true,
      };
    case "DELETE_COMMENT":
      return {
        ...state,
        changeComment: true,
      };
    case "UPDATE_COMMENT":
      return {
        ...state,
        changeComment: true,
      };

    default:
      return state;
  }
}

export default reducer;
