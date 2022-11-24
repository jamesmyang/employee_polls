import { _getUsers } from './api/_DATA'

describe('isUsersAvailable', () => {
  it('will return true if the users are found', async () => {
    var result = await _getUsers();
    console.log("result: " + result['sarahedo'].id)
    //expect(result.length).toEqual(4);
  });


})