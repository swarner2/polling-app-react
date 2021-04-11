import { Avatar, Button, Card, CardActions, CardContent, CardHeader, makeStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OptionId, QuestionModel } from '../../models/question.model';
import { UserModel } from '../../models/user.model';
import { answerQuestion } from '../../store/questions.reducer';
import { selectUserId } from '../../store/store';
import { PageNotFound } from "../page-not-found.component";


const useStyles = makeStyles({
  root: {
    margin: 'auto',
    maxWidth: 345,
  },
  content: {
    paddingLeft: 28,
    paddingTop: 0,
  }
});


export default function QuestionRadioButtons(props: {author: UserModel, question: QuestionModel}) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const userId = useSelector(selectUserId)
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const handleSubmit = () => {
    dispatch(answerQuestion({userId, questionId: props.question.id, selectedOption: value as OptionId}))
  }
  return (
    <div>
    {
      props.author && props.question 
      ? <Card className={classes.root}>
          <CardHeader title={<h1>Would You Rather</h1>} avatar={<Avatar alt={props.author.name} src={props.author.avatarURL} />}></CardHeader>
          <CardContent className={classes.content}>
            <FormControl component="fieldset">
              <RadioGroup aria-label="options" name="options" value={value} onChange={handleChange}>
                <FormControlLabel value={OptionId.optionOne} control={<Radio />} label={'Option 1: ' + props.question.optionOne.text} />
                <FormControlLabel value={OptionId.optionTwo} control={<Radio />} label={'Option 2: ' + props.question.optionTwo.text} />
              </RadioGroup>
            </FormControl>
          </CardContent>
          <CardActions>
              <Button color="primary" disabled={!value} onClick={handleSubmit}>Submit</Button>
          </CardActions>
        </Card> 
      : <PageNotFound></PageNotFound>
    }
    </div>
  );
}
