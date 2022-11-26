import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const QuestionsList = () => {

  return (
    <div className='questions-list'>

      <div className='question-box'>
        <div className='question'>
          <div className='question-author'>JamesYang</div>
          <div className='question-timestamp'>11/22/2022</div>
        </div>
        <div className='question-button'>Show</div>
      </div>



    </div>

  )
}