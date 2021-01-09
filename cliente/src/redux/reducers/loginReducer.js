const initiaState = {
  currentUser: [],
  isConected: false,
  isCreated: false,
  isUpdated: [],
};

function reducer(state = initiaState, action) {
  switch (action.type) {
    case "NEW_USER":
      return {
        ...state,
        isCreated: true,
      };
    case "LOGIN_USER":
      return {
        ...state,
        isConected: true,
      };
    case "GET_USER":
      return {
        ...state,
        currentUser: action.payload,
        isConected: true,
      };
    case "LOGOUT_USER":
      return {
        currentUser: {},
        isConected: false,
      };
    case "UPDATE_USER":
      return {
        ...state,
        isUpdated: true,
      }; 
    default:
      return state;
  }
}

export default reducer;
