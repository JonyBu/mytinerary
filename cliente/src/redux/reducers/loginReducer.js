const initiaState = {
  currentUser: [],
  isConected: false,
  isUpdated: false,
};

function reducer(state = initiaState, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        currentUser: action.payload,
        isConected: true,
      };
    case "GET_USER":
      return {
        ...state,
        currentUser: action.payload,
        isConected: true,
        isUpdated: false,
      };
    case "LOGOUT_USER":
      return {
        currentUser: {},
        isConected: false,
      };
      case "UPDATE_USER":
        return{
          ...state,
          // currentUser: {},
          isUpdated: true,
        }
    default:
      return state;
  }
}

export default reducer;
