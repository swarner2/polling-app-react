import { configureStore } from '@reduxjs/toolkit'
import userIdReducer from './userId'

export const store = configureStore({
  reducer: {
    userId: userIdReducer,
    // questions: questionsReducer,
    // users: usersReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch