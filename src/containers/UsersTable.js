import React from 'react';
import { connect } from 'react-redux';

import { setLoadUsers } from "../actions/loaderActions";
import { setUsers, toggleUser } from "../actions/usersActions";

import { UsersTable as TableView } from "../views";

const UsersTableContainer = ({users, toggleUser}) => {
  return <TableView rows={users || []} onSelectUser={(id) => toggleUser(id)}/>;
}

const mapStateToProps = state => ({
  isLoading: state.loader.isLoading,
  users: state.users.users
});
const mapDispatchToProps = dispatch => ({
  setLoading: (value) => dispatch(setLoadUsers(value)),
  setUsers: (users) => dispatch(setUsers(users)),
  toggleUser: (id) => dispatch(toggleUser(id)),
});

export const UsersTable = connect(mapStateToProps,mapDispatchToProps)(UsersTableContainer);