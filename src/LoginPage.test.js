import * as React from 'react';
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react';
import { LoginPage } from './features/users/LoginPage';
import store from './app/store'
import { fetchUsers } from './features/users/usersSlice'

describe('LoginPage', () => {
  it('7. will have all expected fields', () => {
    var component = render(
      <Provider store={store}>
        <LoginPage />
      </Provider >
    )

    var userLabel = component.getAllByText(/User/)
    expect(userLabel.length).toEqual(1)

    var passwordInput = component.getByTestId('password-input')
    expect(passwordInput).toBeInTheDocument()

    var submitButton = component.getByText('Submit')
    expect(submitButton).toBeInTheDocument();
  })
})

describe('Login Error', () => {
  it('8.1. will see error when incorrect username|password and clicking submit', async () => {
    await store.dispatch(fetchUsers())

    var component = render(
      <Provider store={store}>
        <LoginPage />
      </Provider >
    )

    var nameSelect = component.getByTestId('name-select');
    fireEvent.change(nameSelect, { target: { value: 'zoshikanlu' } });

    var passwordInput = component.getByTestId('password-input');
    fireEvent.change(passwordInput, { target: { value: 'xxxxxxxxxxx' } });

    var submitButton = component.getByText('Submit')
    fireEvent.click(submitButton);

    expect(component.getByTestId('error-header')).toBeInTheDocument();
    expect(component.queryByTestId('success-header')).not.toBeInTheDocument();
  })

})

describe('Login Success', () => {
  it('8.2. will see success when correct username|password and clicking submit', async () => {
    await store.dispatch(fetchUsers())

    var component = render(
      <Provider store={store}>
        <LoginPage />
      </Provider >
    )

    var nameSelect = component.getByTestId('name-select');
    fireEvent.change(nameSelect, { target: { value: 'zoshikanlu' } });

    var passwordInput = component.getByTestId('password-input');
    fireEvent.change(passwordInput, { target: { value: 'pass246' } });

    var submitButton = component.getByText('Submit')
    fireEvent.click(submitButton);

    expect(component.getByTestId('success-header')).toBeInTheDocument();
    expect(component.queryByTestId('error-header')).not.toBeInTheDocument();
  })

})


