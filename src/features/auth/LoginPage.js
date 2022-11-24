import React, { useState } from 'react'
import { useSelector } from 'react-redux'
//import { loginUser } from './authSlice'
import { selectUserIds } from '../../features/users/usersSlice'


export const LoginPage = () => {
  const userIds = useSelector(selectUserIds)

  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const canSubmit = Boolean(userId) && Boolean(password)

  //const dispatch = useDispatch()

  const onUserIdChanged = e => setUserId(e.target.value)
  const onPasswordChanged = e => setPassword(e.target.value)

  const onSubmitClicked = () => {
    if (canSubmit) {
      try {
        //dispatch(loginUser({ userId, password }))

        setUserId('')
        setPassword('')
      } catch (err) {
        console.error('Failed to login: ', err);
      } finally {
        //setAddRequestStatus('idle');
      }

    }
  }

  const renderedOptions = userIds.map(userId => (
    <option key={userId} value={userId}> {userId} </option>
  ))

  return (
    <section className="center" style={{ width: "80%" }}>
      <img src="/employeepolls.png" alt="EmployeePolls Logo" />
      <h4 >Log in</h4>
      <form>
        <label htmlFor="userId">User</label>
        <select
          id="userId"
          name="userId"
          value={userId}
          onChange={onUserIdChanged}
        >
          <option value=""></option>
          {renderedOptions}
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