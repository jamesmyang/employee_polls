import { createSlice } from '@reduxjs/toolkit'

const initialState = [
]

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
  const response = await client.get('/fakeApi/users')
  return response.data
})

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {}
})

export default employeesSlice.reducer