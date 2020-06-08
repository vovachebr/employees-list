let reducer = function(state = {}, action) {
  switch (action.type) {
    case "SET_LOAD_USERS":
      return {...state, isLoading: action.payload};
    default:
      return state;
  }
}
export default reducer;