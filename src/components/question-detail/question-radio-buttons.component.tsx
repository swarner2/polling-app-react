import { Avatar, Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OptionId, QuestionModel } from '../../models/question.model';
import { UserModel } from '../../models/user.model';
import { answerQuestion } from '../../store/questions.reducer';
import { selectUserId } from '../../store/store';
import { PageNotFound } from "../page-not-found.component";


export default function QuestionRadioButtons(props: {author: UserModel, question: QuestionModel}) {
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
      ? <FormControl component="fieldset">
          <FormLabel component="legend">
            <Avatar alt={props.author.name} src={props.author.avatarURL} />
            Would You Rather:</FormLabel>
          <RadioGroup aria-label="options" name="options" value={value} onChange={handleChange}>
            <FormControlLabel value={OptionId.optionOne} control={<Radio />} label={props.question.optionOne.text} />
            <FormControlLabel value={OptionId.optionTwo} control={<Radio />} label={props.question.optionTwo.text} />
          </RadioGroup>
          <Button disabled={!value} onClick={handleSubmit}>Submit</Button>
        </FormControl>
      : <PageNotFound></PageNotFound>
    }
    </div>
  );
}
