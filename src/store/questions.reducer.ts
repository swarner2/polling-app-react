import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { questions } from "../data/questions.data";
import { OptionId, QuestionMapModel, QuestionModel } from "../models/question.model";


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
        state[questionId][selectedOption].votes.push(userId);
        return state
      }
  }
})

export const { add, answerQuestion } = questionsSlice.actions

export default questionsSlice.reducer