import { configureStore } from '@reduxjs/toolkit'

import authenticationReducer from '../features/authentication/authenticationSlice';
import usersReducer from '../features/users/usersSlice'

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
    users: usersReducer,


  }
})
