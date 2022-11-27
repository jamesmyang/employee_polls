import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchQuestions, selectNewQuestionsByUser, selectDoneQuestionsByUser } from './questionsSlice'

import { QuestionsList } from './QuestionsList'

export const QuestionsPage = () => {

  const authUserId = useSelector(state => state.users.auth.userId)
  const newQuestions = useSelector(state => selectNewQuestionsByUser(state, authUserId))
  const doneQuestions = useSelector(state => selectDoneQuestionsByUser(state, authUserId))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchQuestions())
  }, [dispatch]);



  return (
    <div className='questions-container'>
      <div className='questions-panel'>
        <div className='questions-title'>New Questions</div>
        <QuestionsList questions={newQuestions} />
      </div>

      <div className='questions-panel'>
        <div className='questions-title'>Done</div>
        <QuestionsList questions={doneQuestions} />
      </div>
    </div >
  )
}