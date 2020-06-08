import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

import { Header, UsersTable, Footer } from '../containers';

const useStyles = makeStyles({
  app: {
    padding: '5%',
  },
});

export const App = () => {
    const classes = useStyles();
    return(
    <div className={classes.app}>
      <Header />
      <UsersTable />
      <Footer />
    </div>
  );
}
