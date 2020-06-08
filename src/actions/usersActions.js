export const setUsers = (users) => ({
    type: "SET_USERS",
    payload: users
});

export const toggleUser = (id) => ({
    type: "TOGGLE_USER",
    payload: id
});

export const selectAllUsers = (id) => ({
    type: "SELECT_ALL",
});