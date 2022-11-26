import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectUserIds, login } from './usersSlice'


export const LoginPage = () => {
  const userIds = useSelector(selectUserIds)

  const authUserId = useSelector(state => state.users.auth.userId)
  const error = useSelector(state => state.users.auth.error)

  const [userId, setUserId] = useState(authUserId ? authUserId : 'zoshikanlu')
  const [password, setPassword] = useState('pass246')

  const canSubmit = Boolean(userId) && Boolean(password)

  const dispatch = useDispatch()

  const onUserIdChanged = e => setUserId(e.target.value)
  const onPasswordChanged = e => setPassword(e.target.value)

  const onSubmitClicked = () => {
    submit()
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    submit()
  }

  const submit = () => {
    if (canSubmit) {
      dispatch(login({ userId, password }))

      //setUserId('')
      setPassword('')
    }
  }

  const renderedError = () => (
    <div>{error ? error : ""}</div>
  )

  const renderedUserIds = userIds.map(userId => (
    <option key={userId} value={userId}> {userId} </option>
  ))

  return (
    <section className="center" style={{ width: "80%" }}>
      <img src="/employeepolls.png" alt="EmployeePolls Logo" />
      <h4 >Log in</h4>
      {renderedError()}
      <form onSubmit={handleSubmit}>
        <label htmlFor="userId">User</label>
        <select
          id="userId"
          name="userId"
          value={userId}
          onChange={onUserIdChanged}
        >
          <option value="" ></option>
          {renderedUserIds}
        </select>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onPasswordChanged}
        />

        <button
          type="button"
          disabled={!canSubmit}
          onClick={onSubmitClicked}
        >
          Submit
        </button>
      </form>
    </section >
  );
}