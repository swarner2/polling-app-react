import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { QuestionMapModel } from '../models/question.model';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export function QuestionList(props: {questions: QuestionMapModel}) {
  const classes = useStyles();
  const questionValues = Object.values(props.questions).sort((a,b) => b.timestamp - a.timestamp)
  
  return (
    <div className={classes.root}>

      {
        questionValues.length
        ? (<List component="nav" aria-label="secondary mailbox folders">
            {questionValues.map(question => {
              return (
                <ListItem button key={question.id} component={RouterLink} to={`questions/${question.id}`}>
                  <ListItemText primary={question.id}/>
                </ListItem>
              )
            })}
          </List>)
        : (<div>No Quesitons Here!</div>)
      }
    </div>
  );
}
