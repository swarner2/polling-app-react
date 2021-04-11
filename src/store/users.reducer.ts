import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { users } from '../data/users.data'
import { UserModel } from '../models/user.model'
import { answerQuestion, add as addQuestion } from './questions.reducer'

// // Define a type for the slice state
export interface UsersState {
  [key: string]: UserModel;
}


const initialState: UsersState = users as UsersState

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<UserModel>) => ({
      ...state,
      [action.payload.id]: action.payload
    })
  },
  extraReducers: (builder) => {
    builder
    .addCase(answerQuestion, (state, action) => {
        const {questionId, selectedOption, userId} = action.payload;
        state[userId].answers[questionId] = selectedOption
        return state
      })
    .addCase(addQuestion, (state, action) => {
      state[action.payload.author].questions.push(action.payload.id) 
      return state
    })
    .addDefaultCase((state, action) => state)
  }
})

export const { add } = usersSlice.actions


export default usersSlice.reducer  

