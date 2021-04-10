import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { OptionModel } from '../models/question.model';
import { Button } from '@material-ui/core';

export interface QuestionDetailRadioModel {
  id: string;
  authorAvatarURL: string;
  optionOne: OptionModel;
  optionTwo: OptionModel;
}

export default function QuestionDetailRadioButtons(props: {question: QuestionDetailRadioModel}) {
  const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Would You Rather:</FormLabel>
      <RadioGroup aria-label="options" name="options" value={value} onChange={handleChange}>
        <FormControlLabel value="optionOne" control={<Radio />} label={props.question.optionOne.text} />
        <FormControlLabel value="optionTwo" control={<Radio />} label={props.question.optionTwo.text} />
      </RadioGroup>
      <Button>Submit</Button>
    </FormControl>
  );
}
