import { Avatar, Button, Card, CardActions, CardContent, CardHeader, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from '../store/store';
import { login } from '../store/userId.reducer';
import { add } from '../store/users.reducer';

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
  const users = useSelector(selectUsers); 
  const dispatch = useDispatch();
  const classes = useStyles();
  const [selectedUserId, setSelectedUserId] = useState("");
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const [avatarURL, setAvatarURL] = React.useState('');
  const handleAvatarURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAvatarURL(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateAccount = () => {
    dispatch(add({
      name,
      avatarURL,
      id: name.toLowerCase().replace(' ', ''),
      questions: [],
      answers: {}
    }))
    handleClose()
  }

    return (
      <div>
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
            <Button size="small" onClick={handleClickOpen}>Create an Account</Button>
            <Button size="small" color="primary" disabled={!selectedUserId} onClick={() => dispatch(login(selectedUserId))}>Login</Button>
          </CardActions>
        </Card>    

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            Create an Account
          </DialogTitle>

          <DialogContent>
            <Avatar alt={name} src={avatarURL} />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              value={name}
              onChange={handleNameChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="avatarURL"
              label="Avatar URL"
              value={avatarURL}
              onChange={handleAvatarURLChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleCreateAccount} color="primary">
              Create Account
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }