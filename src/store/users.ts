// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { users } from '../data/users.data'
import { UserModel } from '../models/user.model'
// import { RootState } from './store'

// // Define a type for the slice state
export interface UsersState {
  [key: string]: UserModel;
}


// // Define the initial state using that type
// const initialState: UsersState = {
//   ...users as UsersState
// }

// export const counterSlice = createSlice({
//   name: 'users',
//   // `createSlice` will infer the state type from the `initialState` argument
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     // Use the PayloadAction type to declare the contents of `action.payload`
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.value += action.payload
//     },
//   },
// })

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

// export default counterSlice.reducer