// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { users } from '../data/users.data'
// import { RootState } from './store'

import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { questions } from "../data/questions.data";
import { QuestionMapModel, QuestionModel } from "../models/question.model";
import { RootState } from "./store";
import { selectCurrentUser } from "./users";


// // Define the initial state using that type
const initialState: QuestionMapModel = {
  ...questions
}

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
      add: (state, action: PayloadAction<QuestionModel>) => {
        return {
          ...state, 
          [action.payload.id]: action.payload
        }
      }
  }
})

export const { add } = questionsSlice.actions

export const selectQuestions = (state: RootState) => state.questions
export const selectUnansweredQuestions = createSelector(selectQuestions, selectCurrentUser, (questions, user) => { 
    if (user === null) {
      return {};
    }
    const result: QuestionMapModel = Object.keys(questions)
    .filter(key => {
      return !(key in (user?.answers || []));
    })
    .reduce((acc, key) => {
        return {
          ...acc,
          [key]: questions[key]
        };
    }, {} as QuestionMapModel);
    return result;
})

export const selectAnsweredQuestions = createSelector(selectQuestions, selectCurrentUser, (questions, user) => { 
    if (user === null) {
      return {};
    }
    const result: QuestionMapModel = Object.keys(questions)
    .filter(key => {
      return key in (user?.answers || []);
    })
    .reduce((acc, key) => {
        return {
          ...acc,
          [key]: questions[key]
        };
    }, {} as QuestionMapModel);
    return result;
})

export const selectQuestion = (state: RootState, props: {id: string}) => state.questions[props.id]
export const selectQuestionUserAvatar = (state: RootState, props: {id: string}) => state.users[state.questions[props.id].author].avatarURL

// export const selectQuestion = createSelector(selectQuestions, (questions, props: {id: string}) => questions)

export default questionsSlice.reducer