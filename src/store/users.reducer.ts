import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { users } from '../data/users.data'
import { UserModel } from '../models/user.model'
import { answerQuestion } from './questions.reducer'

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
        return {
          ...state,
          [userId]: new UserModel({
            ...state[userId],
            answers: {
              ...state[userId].answers || {},
              [questionId]: selectedOption,
            }
          })
        }
      })
    .addDefaultCase((state, action) => state)
  }
})

export const { add } = usersSlice.actions


export default usersSlice.reducer  

