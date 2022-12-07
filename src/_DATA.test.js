import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './api/_DATA'

//jest.setTimeout(30000);

describe('Unit testing for Users:', () => {
  test('0. will return true if the number of users is greater than 0', async () => {
    var result = await _getUsers()
    expect(Object.keys(result).length).toBeGreaterThan(0)
  })

})

describe('Unit testing for Questions:', () => {

  it('1. will return true if the number of exisiting questions is greater than 0', async () => {
    var result = await _getQuestions()
    expect(Object.keys(result).length).toBeGreaterThan(0)
  })

  it('2. will return question if all expected fields are populated for _saveQuestion', async () => {
    var result = await _saveQuestion({ optionOneText: 'one', optionTwoText: 'two', author: 'sarahedo' })
    expect(result.optionOne.text).toEqual('one');
    expect(result.optionTwo.text).toEqual('two');
    expect(result.author).toEqual('sarahedo');
  })

  it('3. will return reject message if any expected field is missing for _saveQuestion', async () => {
    await expect(_saveQuestion({ optionOneText: 'one', optionTwoText: 'two' }))
      .rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
  })

  it('4. will return true if all expected fields are populated for _saveQuestionAnswer', async () => {
    var result = await _saveQuestionAnswer({ authedUser: 'sarahedo', qid: 'xj352vofupe1dqz9emx13r', answer: 'optionTwo' })
    expect(result).toEqual(true);
  })

  it('5. will return error message if any expected field is missing for _saveQuestionAnswer', async () => {
    await expect(_saveQuestionAnswer({ authedUser: 'sarahedo', qid: 'xj352vofupe1dqz9emx13r' }))
      .rejects.toEqual('Please provide authedUser, qid, and answer');
  })





})