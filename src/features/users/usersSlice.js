import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import { _getUsers } from '../../api/_DATA'

const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState()

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const users = await _getUsers()
  return users
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, usersAdapter.setAll)
  }
})

export default usersSlice.reducer

export const {
  selectAll: selectAllUsers,
  selectIds: selectAllUsersIds,
  selectById: selectUserById
} = usersAdapter.getSelectors(state => state.users)
