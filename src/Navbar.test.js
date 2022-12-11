
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router'
import { Navbar } from './app/Navbar';
import configureStore from 'redux-mock-store';

const mockStore = configureStore()

describe('Navbar', () => {

  const initialState = {
    users: {
      ids: ["zoshikanlu"],
      entities: {
        zoshikanlu: {
          id: 'zoshikanlu',
          password: 'pass246',
          name: 'Zenobia Oshikanlu',
          avatarURL: '/zoshikanlu.png',
          answers: {
          },
          questions: [],
        }
      },
      auth: {
        userId: "zoshikanlu",
        error: null
      }
    }
  }

  const store = mockStore(initialState)

  it('10. will have all expected Links', async () => {

    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Navbar />
        </Provider >
      </MemoryRouter>
    )

    var homeLink = component.getByText('Home')
    expect(homeLink).toBeInTheDocument();

    var leaderboardLink = component.getByText('Leaderboard')
    expect(leaderboardLink).toBeInTheDocument();

    var addLink = component.getByText('New')
    expect(addLink).toBeInTheDocument();

    var userLink = component.getByText('zoshikanlu')
    expect(userLink).toBeInTheDocument();

    var logoutLink = component.getByText('Logout')
    expect(logoutLink).toBeInTheDocument();

  })

})