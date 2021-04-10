// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { users } from '../data/users.data'
// import { RootState } from './store'

import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { questions } from "../data/questions.data";
import { OptionId, QuestionMapModel, QuestionModel } from "../models/question.model";
import { RootState } from "./store";


// // Define the initial state using that type
const initialState: QuestionMapModel = {
  ...questions
}

export interface AnswerQuestionPayload {
  questionId: string, 
  selectedOption: OptionId, 
  userId: string
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
      },
      answerQuestion: (state, action: PayloadAction<AnswerQuestionPayload>) => {
        const {questionId, selectedOption, userId} = action.payload;
        const targetQuestion: QuestionModel =  {
          ...state[questionId],
          [selectedOption]: {
            ...state[questionId][selectedOption],
            votes: [...state[questionId][selectedOption].votes, userId]
          }
        };
        return {...state, [questionId]: targetQuestion};
      }
  }
})

export const { add, answerQuestion } = questionsSlice.actions




// export const selectQuestion = createSelector(selectQuestions, (questions, props: {id: string}) => questions)

export default questionsSlice.reducer