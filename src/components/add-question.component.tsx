import { Button, Card, CardActions, CardContent, CardHeader, TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { QuestionModel } from '../models/question.model';
import { add } from '../store/questions.reducer';
import { selectQuestions, selectUserId } from '../store/store';
import { routeConfig } from './app-routing.component';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);


export function AddQuestion() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const questions = useSelector(selectQuestions)
  const userId = useSelector(selectUserId)

  const [option1, setOption1] = React.useState('');
  const handleOption1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption1(event.target.value);
  };
  const [option2, setOption2] = React.useState('');
  const handleOption2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption2(event.target.value);
  };

  const generateId = (): string => {
    return Math.random().toString(16).substr(2, 11) + Math.random().toString(16).substr(2, 11);
  }

  const handleSubmit = () => {
    let questionId = generateId();
    while (questionId in questions) {
      questionId = generateId();
    }

    const question: QuestionModel = {
      id: questionId,
      author: userId,
      timestamp: new Date().getTime(),
      optionOne: {
        votes: [],
        text: option1
      },
      optionTwo: {
        votes: [],
        text: option2
      }
    }
    history.push(routeConfig.home.path)
    dispatch(add(question))
  }

  return (
    <Card raised={true}>             
      <CardHeader title="Would You Rather"></CardHeader>
      <CardContent>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="option1" label="Option 1:" value={option1} onChange={handleOption1Change} />
          <TextField id="option2" label="Option 2:" value={option2} onChange={handleOption2Change} />
        </form>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" disabled={!option1 || !option2} onClick={handleSubmit}>Add Question</Button>
      </CardActions>
    </Card>    
  );
}
