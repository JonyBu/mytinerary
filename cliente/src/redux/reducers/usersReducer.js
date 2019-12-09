const defaultUser = {
  users: []
}

function reducer(state = defaultUser, action) {

  switch (action.type) {
      case 'usersAction':
          return {
              ...state,
              users: action.payload
          }
      default:
          return state;
  }
}

export default reducer;