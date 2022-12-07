import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { logout, selectUserById } from '../features/users/usersSlice'

export const Navbar = () => {

  const authUserId = useSelector(state => state.users.auth.userId)
  const user = useSelector(state => selectUserById(state, authUserId))

  const dispatch = useDispatch()

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <nav>
      <section>
        <h1>Employee Polls</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/" >Home</Link>
            <Link to="/leaderboard" >Leaderboard</Link>
            <Link to="/add" >New</Link>
          </div>

          <div className="navLinks">
            <div className="auth"><img className="auth-img" src={user.avatarURL} alt={authUserId} /></div>
            <div className="auth">{authUserId}</div>
            <div className="auth auth-out" onClick={logOut}>Logout</div>
          </div>
        </div>
      </section>
    </nav>
  )
}
