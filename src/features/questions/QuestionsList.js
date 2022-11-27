

export const QuestionsList = ({ questions }) => {

  //const time = 

  const renderedQuestions = () => {
    if (!questions) {
      return <div className='question-timestamp'>loading</div>
    }

    return questions.map(question => (
      <div className='question-box' key={question.id}>
        <div className='question'>
          <div className='question-author'>{question.author}</div>
          <div className='question-timestamp'>{new Date(question.timestamp).toLocaleDateString()}</div>
        </div>
        <div className='question-button'>Show</div>
      </div>
    ))
  }

  return (
    <div className='questions-list'>
      {renderedQuestions()}
    </div>
  )
}