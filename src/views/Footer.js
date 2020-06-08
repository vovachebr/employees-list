import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

import { Chip } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    paddingTop: '2%',
  },
});

export const Footer = ({users, onClick}) =>{
  const classes = useStyles();

  return(
    <footer className={classes.footer}>
      {users.length > 0 && <span>Пользователи:</span>}
      {users.map(u => <Chip label={`${u.name} ${u.lastName}`} onClick={() => onClick(u.id)} />)}
    </footer>
  );
}
