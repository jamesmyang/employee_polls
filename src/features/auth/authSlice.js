import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  userId: null,
  error: null
}

// export const loginUser = createAsyncThunk('auth/login', ({ userId, password }) => {
//   const user = selectUserById(userId)
//   console.log("user: " + user)
//   return user
// })

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //login(state, action) {
    //   const { userId, password } = action.payload
    //  console.log("userId: " + userId + ", password: " + password)
    // const existingPost = state.find(post => post.id === id)
    // if (existingPost) {
    //   existingPost.title = title
    //   existingPost.content = content
    // }
    //  state.userId = userId
    // },
    logout(state, action) {
      console.log("logout")
    }
  },
  extraReducers(builder) {
    //builder.addCase(login.fulfilled, (state, action) => {
    //  state.userId = 'loading'
    //})
  }
})

export const { logout } = authSlice.actions

export default authSlice.reducer;

