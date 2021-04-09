import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

// Define a type for the slice state
interface loginState {
    id: string
}


// Define the initial state using that type
const initialState: loginState = {
    id: "",
}

export const userIdSlice = createSlice({
  name: 'userId',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
        state = {id: action.payload}
    },
    logout: (state) => {
      state = initialState
    },
  },
})

export const { login, logout } = userIdSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUserId = (state: RootState) => state.userId.id

export default userIdSlice.reducer