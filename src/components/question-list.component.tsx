import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { QuestionMapModel } from '../models/question.model'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

export function QuestionList(props: {questions: QuestionMapModel}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        {Object.values(props.questions).map(question => {
          return (
            <ListItemLink key={question.id} href={`#${question.id}`}>
              <ListItemText primary={question.id + '-' + question.timestamp}/>
            </ListItemLink>
          )
        })}
      </List>
    </div>
  );
}
