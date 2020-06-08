import React from 'react';
import { connect } from 'react-redux';

import {toggleUser} from "../actions/usersActions";
import { Footer as FooterView } from "../views";

const FooterContainer = ({selectedUsers, toggleUser}) =>
  <FooterView users={selectedUsers} onClick={toggleUser} />

const mapStateToProps = state => ({
  selectedUsers: state.users.users.filter(u => u.isSelected),
});
const mapDispatchToProps = dispatch => ({
  toggleUser: (id) => dispatch(toggleUser(id)),
});

export const Footer = connect(mapStateToProps,mapDispatchToProps)(FooterContainer);