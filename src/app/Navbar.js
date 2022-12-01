import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { logout } from '../features/users/usersSlice'

export const Navbar = () => {

  const authUserId = useSelector(state => state.users.auth.userId)

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
            <Link to="/" >{authUserId}</Link>
            <Link to="/" onClick={logOut}>Logout</Link>
          </div>
        </div>
      </section>
    </nav>
  )
}
