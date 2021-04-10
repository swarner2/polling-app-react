import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Avatar, Button } from '@material-ui/core';
import { OptionModel, QuestionModel } from '../../models/question.model';
import { UserModel } from '../../models/user.model';


export default function QuestionRadioButtons(props: {author: UserModel, question: QuestionModel}) {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
// "/static/images/avatar/1.jpg"
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        <Avatar alt={props.author.name} src={props.author.avatarURL} />
        Would You Rather:</FormLabel>
      <RadioGroup aria-label="options" name="options" value={value} onChange={handleChange}>
        <FormControlLabel value="optionOne" control={<Radio />} label={props.question.optionOne.text} />
        <FormControlLabel value="optionTwo" control={<Radio />} label={props.question.optionTwo.text} />
      </RadioGroup>
      <Button>Submit</Button>
    </FormControl>
  );
}
