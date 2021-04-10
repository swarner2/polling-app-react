// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { users } from '../data/users.data'
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { users } from '../data/users.data'
import { UserModel } from '../models/user.model'
import { answerQuestion, AnswerQuestionPayload } from './questions.reducer'
import { RootState } from './store'
// import { RootState } from './store'

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
    .addDefaultCase((state, action) => {
      console.log(state)
      return state
    })
  }
})

export const { add } = usersSlice.actions

export const selectUsers = (state: RootState) => state.users

export default usersSlice.reducer  

export const selectUserId = (state: RootState) => state?.userId?.id || ""
export const selectCurrentUser = createSelector(selectUsers, selectUserId, (users, userId) => users[userId])
