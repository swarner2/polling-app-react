import { Avatar, Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React from 'react';
import { QuestionModel } from '../../models/question.model';
import { UserModel } from '../../models/user.model';
import { PageNotFound } from "../page-not-found.component";


export default function QuestionRadioButtons(props: {author: UserModel, question: QuestionModel}) {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
// "/static/images/avatar/1.jpg"
  return (
    <div>
    {
      props.author && props.question 
      ? <FormControl component="fieldset">
          <FormLabel component="legend">
            <Avatar alt={props.author.name} src={props.author.avatarURL} />
            Would You Rather:</FormLabel>
          <RadioGroup aria-label="options" name="options" value={value} onChange={handleChange}>
            <FormControlLabel value="optionOne" control={<Radio />} label={props.question.optionOne.text} />
            <FormControlLabel value="optionTwo" control={<Radio />} label={props.question.optionTwo.text} />
          </RadioGroup>
          <Button>Submit</Button>
        </FormControl>
      : <PageNotFound></PageNotFound>
    }
    </div>
  );
}
