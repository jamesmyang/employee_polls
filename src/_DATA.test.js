import { _getUsers, _getQuestions } from './api/_DATA'

describe('isUsersAvailable', () => {
  it('will return true if the users are found', async () => {
    var result = await _getUsers();
    console.log("result: " + result['sarahedo'].id)
    //expect(result.length).toEqual(4);
  });


})

describe('isQuestionsAvailable', () => {
  it('will return true if the questions are found', async () => {
    var result = await _getQuestions();
    console.log("result: " + result['8xf0y6ziyjabvozdd253nd'].id)
    //expect(result.length).toEqual(4);
  });


})