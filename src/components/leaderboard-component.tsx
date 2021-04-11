import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { selectUsers } from '../store/store';
import { Avatar } from '@material-ui/core';
import { UserModel } from '../models/user.model';

const useStyles = makeStyles({
  container: {
    margin: 'auto',
    width: 650
  },
  table: {
    width: 650,

  },
});

export interface LeaderboardElement {
  name: string;
  avatarURL: string;
  asked: number;
  answered: number;
}

function createData(user: UserModel): LeaderboardElement {
  return {         
        name: user.name,
        avatarURL: user.avatarURL,
        asked: user?.questions?.length,
        answered: Object.values(user.answers).length
    };
}

export default function Leaderboard() {
  const classes = useStyles();
  const users = useSelector(selectUsers);

  const rows: LeaderboardElement[] = Object.values(users).map(createData).sort((x, y) => x.asked + x.answered < y.asked + y.answered ? 1 : -1)

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Asked</TableCell>
            <TableCell align="right">Answered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <Avatar alt={row.name} src={row.avatarURL} />
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="right">{row.asked}</TableCell>
              <TableCell align="right">{row.answered}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
