import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectQuestionById, updateQuestion } from './questionsSlice'
import { selectUserById } from '../../features/users/usersSlice'

export const SingleQuestionPage = ({ match }) => {
  const { question_id } = match.params
  //console.log("question_id: " + question_id)

  const question = useSelector(state => selectQuestionById(state, question_id))
  //console.log("question: " + question)

  const authUserId = useSelector(state => state.users.auth.userId)
  //console.log("authUserId: " + authUserId)
  const authorUser = useSelector(state => selectUserById(state, question.author))
  //console.log("authorUser: " + authorUser)

  const [answeredOne, setAnsweredOne] = useState(question.optionOne.votes.includes(authUserId))
  const [answeredTwo, setAnsweredTwo] = useState(question.optionTwo.votes.includes(authUserId))

  const [numberVotesOne, setNumberVotesOne] = useState(question.optionOne.votes.length)
  const [numberVotesTwo, setNumberVotesTwo] = useState(question.optionTwo.votes.length)

  const [percentageVotesOne, setPercentageVotesOne] = useState(
    question.optionOne.votes.length + question.optionTwo.votes.length === 0 ? 0 :
      question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length))
  const [percentageVotesTwo, setPercentageVotesTwo] = useState(
    question.optionOne.votes.length + question.optionTwo.votes.length === 0 ? 0 :
      question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length))

  const dispatch = useDispatch()

  const handleClicked = (option) => {
    dispatch(updateQuestion({ authedUser: authUserId, qid: question_id, answer: option }))

    if (option === "optionOne") {
      setAnsweredOne(true)
      setNumberVotesOne(numberVotesOne + 1)

      setPercentageVotesOne((question.optionOne.votes.length + 1) / (question.optionOne.votes.length + 1 + question.optionTwo.votes.length))
      setPercentageVotesTwo((question.optionTwo.votes.length) / (question.optionOne.votes.length + 1 + question.optionTwo.votes.length))
    }

    if (option === "optionTwo") {
      setAnsweredTwo(true)
      setNumberVotesTwo(numberVotesTwo + 1)

      setPercentageVotesOne((question.optionOne.votes.length) / (question.optionOne.votes.length + 1 + question.optionTwo.votes.length))
      setPercentageVotesTwo((question.optionTwo.votes.length + 1) / (question.optionOne.votes.length + 1 + question.optionTwo.votes.length))
    }
  }

  const OptionExcerpt = ({ option, optionText, answered, answeredWhich }) => {
    const renderedButton = () => {
      if (!answered) {
        return "Click"
      }

      if (option === 'optionOne' && answeredWhich) {
        return "Selected"
      }

      if (option === 'optionTwo' && answeredWhich) {
        return "Selected"
      }

      return "Not selected"
    }

    const renderedStatistics = () => {
      if (!answered) {
        return <div></div>
      }

      if (option === 'optionOne') {
        return renderedVotes(numberVotesOne, percentageVotesOne)
      }

      if (option === 'optionTwo') {
        return renderedVotes(numberVotesTwo, percentageVotesTwo)
      }
    }

    const renderedVotes = (votes, percent) => {
      return (
        < div className="answer" >
          <div className="answer-option">Number vote(s): {votes}</div>
          <div className="answer-option">Percentage (%): {percent * 100}</div>
        </div >
      )
    }

    return (
      <div className="answer-box" >
        <div className="answer">
          <div className="answer-option">{optionText}</div>
        </div>
        <button type="button" className="answer-button" disabled={answered} onClick={() => handleClicked(option)}>
          {renderedButton()}
        </button>
        {renderedStatistics()}
      </div>
    )
  }


  if (!question) {
    return (
      <div className="questions-container">
        <div className="question-panel">
          <div className="question-author">Poll not found</div>
        </div>
      </div >
    );
  };

  return (
    <div className="questions-container">
      <div className="question-panel">
        <div className="question-author">Poll by {question.author}</div>
        <img className="ques-img" src={authorUser.avatarURL} alt={authorUser.avatarURL} />
        <div className="question-head">Would You Rather</div>
        <div className="answers-list">
          <OptionExcerpt option={"optionOne"} optionText={question.optionOne.text} answered={answeredOne || answeredTwo} answeredWhich={answeredOne} />
          <OptionExcerpt option={"optionTwo"} optionText={question.optionTwo.text} answered={answeredOne || answeredTwo} answeredWhich={answeredTwo} />
        </div>
      </div>
    </div >
  );
};