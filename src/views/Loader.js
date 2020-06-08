import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  circle: {
    position: "fixed",
    top: "45%",
    left: "50%"
  },
});

export const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.circle}>
      <CircularProgress />
    </div>
  );
}
