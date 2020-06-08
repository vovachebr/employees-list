import React from 'react';
import { connect } from 'react-redux';

import { selectAllUsers } from "../actions/usersActions";
import { Header as HeaderView } from "../views";

const HeaderContainer = ({isAllSelected, selectAll}) =>
  <HeaderView value={isAllSelected} onChange={() => selectAll()}/>

const mapStateToProps = state => ({
  isAllSelected: state.users.users.every(u => u.isSelected),
});
const mapDispatchToProps = dispatch => ({
  selectAll: () => dispatch(selectAllUsers()),
});

export const Header = connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);