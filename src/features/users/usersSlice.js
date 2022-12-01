import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import { _getUsers } from '../../api/_DATA'

const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState({
  auth: {
    userId: null,
    error: null
  }
})

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const users = await _getUsers()
  return users
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login(state, action) {
      const { userId, password } = action.payload
      const foundUser = state.entities[userId]
      if (foundUser) {
        const foundUserPassword = foundUser.password
        if (foundUserPassword === password) {
          state.auth.userId = userId
          state.auth.error = null
        } else {
          state.auth.userId = null
          state.auth.error = "User's password not match (hint: " + foundUserPassword + ")"
        }
      } else {
        state.auth.userId = null
        state.auth.error = "User not found for " + userId
      }
    },
    logout(state, action) {
      state.auth.userId = null
      state.auth.error = null
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, usersAdapter.upsertMany)
  }
})

export const { login, logout } = usersSlice.actions

export default usersSlice.reducer

export const {
  selectAll: selectAllUsers,
  selectIds: selectUserIds,
  selectById: selectUserById
} = usersAdapter.getSelectors(state => state.users)
