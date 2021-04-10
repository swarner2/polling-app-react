// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { users } from '../data/users.data'
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { users } from '../data/users.data'
import { UserModel } from '../models/user.model'
import { RootState } from './store'
import { selectUserId } from './userId'
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
  }
})

export const { add } = usersSlice.actions

export const selectUsers = (state: RootState) => state.users

export const selectCurrentUser = createSelector(selectUsers, selectUserId, (users, userId) => users[userId])

export default usersSlice.reducer  
