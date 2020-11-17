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
      console.log("addComment ----------------------", action);
      return {
        ...state,
        activities: action.payload,
        changeComment: true,
      };
    case "DELETE_COMMENT":
      console.log("--------------delete comment--------------", action);
      return {
        ...state,
        changeComment: true,
      };
    case "UPDATE_COMMENT":
      console.log("--------------update comment--------------", action);
      return {
        ...state,
        changeComment: true,
      };

    default:
      return state;
  }
}

export default reducer;
