import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { OptionModel } from '../models/question.model';
import { Avatar, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectQuestion, selectQuestions } from '../store/questions';
import { selectUsers } from '../store/users';

export interface QuestionDetailRadioModel {
  id: string;
  authorAvatarURL: string;
  optionOne: OptionModel;
  optionTwo: OptionModel;
}

export default function QuestionDetailRadioButtons(props: { match: {params: {id: string  }}}) {
  // TODO :: figure out memoized selector pattern for reusability
  const questions = useSelector(selectQuestions)
  const users = useSelector(selectUsers)
  const questionId = props.match.params.id 
  const question = questions[questionId]
  const authorId = question.author
  const author = users[authorId]

  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
// "/static/images/avatar/1.jpg"
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        <Avatar alt={author.name} src={author.avatarURL} />
        Would You Rather:</FormLabel>
      <RadioGroup aria-label="options" name="options" value={value} onChange={handleChange}>
        <FormControlLabel value="optionOne" control={<Radio />} label={question.optionOne.text} />
        <FormControlLabel value="optionTwo" control={<Radio />} label={question.optionTwo.text} />
      </RadioGroup>
      <Button>Submit</Button>
    </FormControl>
  );
}
