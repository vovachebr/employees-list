let reducer = function(state = {users: []}, action) {
  switch (action.type) {
    case "SET_USERS":
      const users = action.payload.map(u => ({...u, isSelected: false}));
      return {...state, users};
    case "SELECT_ALL":
      const selectedUsers = state.users.map(u => ({...u, isSelected: true}))
      return {...state, users: selectedUsers};
    case "TOGGLE_USER":
      const toggledUser = state.users.map(u =>
        u.id === action.payload ? {...u, isSelected: !u.isSelected} : u
      );
      return {...state, users: toggledUser};
    default:
      return state;
  }
}
export default reducer;