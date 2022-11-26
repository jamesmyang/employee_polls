
import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import { _getQuestions } from '../../api/_DATA'

const questionsAdapter = createEntityAdapter()

const initialState = questionsAdapter.getInitialState()

export const fetchQuestions = createAsyncThunk('questions/fetchQuestions', async () => {
  console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")
  const questions = await _getQuestions()
  return questions
})


const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(fetchQuestions.fulfilled, questionsAdapter.setAll)
  }
})

export default questionsSlice.reducer

export const {
  selectAll: selectAllQuestions,
  selectIds: selectQuestionIds,
  selectById: selectQuestionById
} = questionsAdapter.getSelectors(state => state.questions)