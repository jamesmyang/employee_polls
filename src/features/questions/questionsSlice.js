
import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from '@reduxjs/toolkit'
import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../../api/_DATA'

const questionsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.timestamp - a.timestamp
})

const initialState = questionsAdapter.getInitialState()

export const fetchQuestions = createAsyncThunk('questions/fetchQuestions', async () => {
  const questions = await _getQuestions()
  return questions
})

export const updateQuestion = createAsyncThunk('questions/updateQuestion', async ({ authedUser, qid, answer }) => {
  const result = await _saveQuestionAnswer({ authedUser, qid, answer })
  return result
})

export const createQuestion = createAsyncThunk('questions/createQuestion', async (initialQuestion) => {
  const result = await _saveQuestion(initialQuestion)
  console.log("cccccccccccccccccccccccccccccccccccccccccccccccccc")
  return result
})

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(fetchQuestions.fulfilled, questionsAdapter.upsertMany)
    builder.addCase(updateQuestion.fulfilled, (state, action) => {
    })
    builder.addCase(createQuestion.fulfilled, questionsAdapter.addOne)
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