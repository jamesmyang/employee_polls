import * as React from 'react';
import { Provider } from 'react-redux'
import { render } from '@testing-library/react';
import App from './App';
import store from './app/store'

describe('App', () => {
  it('matches the snapshot for App', async () => {
    var component = render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(component).toMatchSnapshot();
  })


})