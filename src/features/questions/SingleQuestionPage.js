import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectQuestionById, updateQuestion } from './questionsSlice'
import { selectUserById } from '../../features/users/usersSlice'

export const SingleQuestionPage = ({ match }) => {
  const { question_id } = match.params

  const authUserId = useSelector(state => state.users.auth.userId)
  const question = useSelector(state => selectQuestionById(state, question_id))
  const authorUser = useSelector(state => selectUserById(state, question.author))

  const [answeredOne, setAnsweredOne] = useState(question.optionOne.votes.includes(authUserId))
  const [answeredTwo, setAnsweredTwo] = useState(question.optionTwo.votes.includes(authUserId))

  const dispatch = useDispatch()

  const handleClicked = (option) => {
    dispatch(updateQuestion({ authedUser: authUserId, qid: question_id, answer: option }))
    if (option === "optionOne") {
      setAnsweredOne(true)
    }
    if (option === "optionTwo") {
      setAnsweredTwo(true)
    }
  }

  const OptionExcerpt = ({ optionText, option }) => {
    return (
      <div className="answer-box" >
        <div className="answer">
          <div className="answer-option">{optionText}</div>
        </div>
        <button type="button" className="answer-button" disabled={answeredOne || answeredTwo} onClick={() => handleClicked(option)}>
          {!answeredOne && !answeredTwo ?
            "Click"
            :
            answeredOne && option === "optionOne" ? "Selected"
              :
              answeredTwo && option === "optionTwo" ? "Selected"
                :
                "Not selected"
          }
        </button>
      </div>
    )
  }

  if (!question) {
    return (
      <section>
        <h2>Question not found!</h2>
      </section>
    );
  };

  return (
    <div className="questions-container">
      <div className="question-panel">
        <div className="question-author">Poll by {question.author}</div>
        <img src={authorUser.avatarURL} alt={authorUser.avatarURL} />
        <div className="question-head">Would You Rather</div>
        <div className="answers-list">
          <OptionExcerpt optionText={question.optionOne.text} option={"optionOne"} />
          <OptionExcerpt optionText={question.optionTwo.text} option={"optionTwo"} />
        </div>
      </div>
    </div >
  );
};