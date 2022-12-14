import { configureStore } from '@reduxjs/toolkit'

import usersReducer from '../features/users/usersSlice'
import questionsReducer from '../features/questions/questionsSlice'

export default configureStore({
  reducer: {
    questions: questionsReducer,
    users: usersReducer,
  }
})
