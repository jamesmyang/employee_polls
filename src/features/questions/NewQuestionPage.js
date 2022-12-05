import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


import { createQuestion } from './questionsSlice'

export const NewQuestionPage = () => {

  const authUserId = useSelector(state => state.users.auth.userId)

  //const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const [firstOption, setFirstOption] = useState('')
  const [secondOption, setSecondOption] = useState('')

  const canSubmit = Boolean(firstOption) && Boolean(secondOption) //&& addRequestStatus === 'idle'

  const onFirstOptionChanged = e => setFirstOption(e.target.value)
  const onSecondOptionChanged = e => setSecondOption(e.target.value)

  const dispatch = useDispatch()
  const history = useHistory();

  const onSubmitClicked = () => {
    submit()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submit()
  }

  const submit = async () => {
    if (canSubmit) {
      try {
        //setAddRequestStatus('pending');
        await dispatch(createQuestion({ optionOneText: firstOption, optionTwoText: secondOption, author: authUserId })).unwrap();
        setFirstOption('')
        setSecondOption('')

        history.push(`/`);
      } catch (err) {
        console.error('Failed to save the poll: ', err);
      } finally {
        //setAddRequestStatus('idle');
      }
    }
  }


  return (
    <div className="questions-container">
      <div className="question-form-panel">
        <div className="question-head">Would You Rather</div>
        <div className="question-poll">Create Your Own Poll</div>
        <div className="question-form">
          <form onSubmit={handleSubmit}>
            <label className="question-label" htmlFor="firstOption">First Option</label>
            <input
              className="question-option"
              type="text"
              id="firstOption"
              name="firstOption"
              value={firstOption}
              onChange={onFirstOptionChanged}
            />

            <label className="question-label" htmlFor="secondOption">Second Option</label>
            <input
              className="question-option"
              type="text"
              id="secondOption"
              name="secondOption"
              value={secondOption}
              onChange={onSecondOptionChanged}
            />

            <button
              type="button"
              disabled={!canSubmit}
              onClick={onSubmitClicked}
            >
              Submit
            </button>
          </form>

        </div>
      </div>
    </div >
  )

}