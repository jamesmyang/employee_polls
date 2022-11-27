
import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from '@reduxjs/toolkit'
import { _getQuestions } from '../../api/_DATA'

const questionsAdapter = createEntityAdapter()

const initialState = questionsAdapter.getInitialState()

export const fetchQuestions = createAsyncThunk('questions/fetchQuestions', async () => {
  const questions = await _getQuestions()
  return questions
})

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(fetchQuestions.fulfilled, questionsAdapter.upsertMany)
  }
})

export default questionsSlice.reducer

export const {
  selectAll: selectAllQuestions,
  selectIds: selectQuestionIds,
  selectById: selectQuestionById
} = questionsAdapter.getSelectors(state => state.questions)

export const selectNewQuestionsByUser = createSelector(
  [selectAllQuestions, (state, userId) => userId],
  (questions, userId) => questions.filter(question => !question.optionOne.votes.includes(userId) && !question.optionTwo.votes.includes(userId))
)

export const selectDoneQuestionsByUser = createSelector(
  [selectAllQuestions, (state, userId) => userId],
  (questions, userId) => questions.filter(question => question.optionOne.votes.includes(userId) || question.optionTwo.votes.includes(userId))
)