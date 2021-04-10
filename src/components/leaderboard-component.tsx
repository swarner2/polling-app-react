import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export function Leaderboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Leaderboard here!
    </div>
  );
}
