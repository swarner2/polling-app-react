import React from 'react';
import { useSelector } from 'react-redux';
import { OptionModel } from '../../models/question.model';
import { selectQuestions } from '../../store/questions';
import { selectCurrentUser, selectUsers } from '../../store/users';
import QuestionInfo from './question-info';
import QuestionRadioButtons from './question-radio-buttons.component';

export interface QuestionDetailRadioModel {
  id: string;
  authorAvatarURL: string;
  optionOne: OptionModel;
  optionTwo: OptionModel;
}

export default function QuestionDetailPage(props: { match: {params: {id: string  }}}) {
  // TODO :: figure out memoized selector pattern for reusability
  const questions = useSelector(selectQuestions)
  const users = useSelector(selectUsers)
  const currentUser = useSelector(selectCurrentUser)
  const questionId = props.match.params.id 
  const question = questions[questionId]
  const optionCurrentUserSelected = currentUser.answers[questionId] 
  const authorId = question.author
  const author = users[authorId]

  const [value, setValue] = React.useState('');

// "/static/images/avatar/1.jpg"
  return (
    <div>
        {
          optionCurrentUserSelected 
            ? <QuestionInfo question={question} author={author} user={currentUser}></QuestionInfo> 
            : <QuestionRadioButtons question={question} author={author}></QuestionRadioButtons>
        }
    </div>
  );
}
