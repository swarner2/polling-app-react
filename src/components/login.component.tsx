import React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { users } from '../data/users.data';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUserId } from '../store/userId';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

export function Login(){
  const dispatch = useDispatch()
  const userId = useSelector(selectUserId)
    return (
      <div>
        {userId}
        <Card raised={true}>             
          <CardHeader title="Login" ></CardHeader>
          <CardContent>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Username</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userId}
                onChange={(e) => dispatch(login(e.target.value as string))}
              > 
                {Object.values(users).map(user => (
                  <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
                ))}

              </Select>
            </FormControl>
          </CardContent>
          <CardActions>
            <Button size="small">Login</Button>
          </CardActions>
        </Card>    
      </div>

    );
  }
