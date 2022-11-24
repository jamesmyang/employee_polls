import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
}

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
  }
})

export default authenticationSlice.reducer;

