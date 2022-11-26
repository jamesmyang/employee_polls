import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchQuestions } from './questionsSlice'

import { QuestionsList } from './QuestionsList'

export const QuestionsPage = () => {

  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(fetchQuestions())
  }, [dispatch]);



  return (
    <div className='questions-container'>
      <div className='questions-panel'>
        <div className='questions-title'>New Questions</div>
        <QuestionsList />
      </div>

      <div className='questions-panel'>
        <div className='questions-title'>Done</div>
        <QuestionsList />
      </div>
    </div >
  )
}