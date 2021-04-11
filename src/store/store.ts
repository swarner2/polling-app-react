import { combineReducers, createSelector, createStore } from '@reduxjs/toolkit'
import userIdReducer from './userId.reducer'
import questionsReducer from './questions.reducer'
import usersReducer from './users.reducer'
import { QuestionMapModel } from '../models/question.model'

const reducer = combineReducers({
    userId: userIdReducer,
    questions: questionsReducer,
    users: usersReducer,
})


export const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// USER SELECTORS
export const selectUserIsLoggedIn = (state: RootState) => Boolean(state?.userId?.id)
export const selectUsers = (state: RootState) => state.users
export const selectUserId = (state: RootState) => state?.userId?.id || ""
export const selectCurrentUser = createSelector(selectUsers, selectUserId, (users, userId) => users[userId])

// QUESTION SELECTORS
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