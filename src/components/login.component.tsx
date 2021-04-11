import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme } from '@material-ui/core';

import { users } from '../data/users.data';
import { useDispatch } from 'react-redux';
import { login } from '../store/userId.reducer';

const useStyles = makeStyles((theme: Theme) => ({
  card : {
    margin: 'auto',
    width: 250
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function Login(){
  const dispatch = useDispatch();
  const classes = useStyles();
const [selectedUserId, setSelectedUserId] = useState("");

    return (
      <Card className={classes.card} raised={true}>             
        <CardHeader title="Login" ></CardHeader>
        <CardContent>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Username</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(e.target.value as string)}
            > 
              {Object.values(users).map(user => (
                <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
              ))} 
            </Select>
          </FormControl>
        </CardContent>
        <CardActions>
          <Button size="small" disabled={!selectedUserId} onClick={() => dispatch(login(selectedUserId))}>Login</Button>
        </CardActions>
      </Card>    
    );
  }
