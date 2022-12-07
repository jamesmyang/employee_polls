import * as React from 'react';
import { Provider } from 'react-redux'
import { render } from '@testing-library/react';
import { LeaderBoardPage } from './features/users/LeaderBoardPage';
import store from './app/store'
import { fetchUsers } from './features/users/usersSlice'

describe('LeaderBoardPage', () => {
  it('9. will display the correct users, questions and answereds', async () => {
    await store.dispatch(fetchUsers())

    var component = render(
      <Provider store={store}>
        <LeaderBoardPage />
      </Provider >
    )

    var autherNames = component.queryAllByTestId('author_name')
    expect(autherNames.length).toEqual(4)

    var autherIds = component.queryAllByTestId('author_id')
    expect(autherIds.length).toEqual(4)

    var autherAnswereds = component.queryAllByTestId('author_answered')
    expect(autherAnswereds.length).toEqual(4)

    var autherQuestions = component.queryAllByTestId('author_question')
    expect(autherQuestions.length).toEqual(4)

    expect(autherNames[0].innerHTML).toEqual('Sarah Edo')
    expect(autherIds[0].innerHTML).toEqual('sarahedo')
    expect(autherAnswereds[0].innerHTML).toEqual('4')
    expect(autherQuestions[0].innerHTML).toEqual('2')

    expect(autherNames[1].innerHTML).toEqual('Tyler McGinnis')
    expect(autherIds[1].innerHTML).toEqual('tylermcginnis')
    expect(autherAnswereds[1].innerHTML).toEqual('2')
    expect(autherQuestions[1].innerHTML).toEqual('2')

    expect(autherNames[2].innerHTML).toEqual('Mike Tsamis')
    expect(autherIds[2].innerHTML).toEqual('mtsamis')
    expect(autherAnswereds[2].innerHTML).toEqual('3')
    expect(autherQuestions[2].innerHTML).toEqual('2')

    expect(autherNames[3].innerHTML).toEqual('Zenobia Oshikanlu')
    expect(autherIds[3].innerHTML).toEqual('zoshikanlu')
    expect(autherAnswereds[3].innerHTML).toEqual('1')
    expect(autherQuestions[3].innerHTML).toEqual('0')



  })
})