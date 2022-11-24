import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Employee Polls</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/" >Home</Link>
            <Link to="/" >Leaderboard</Link>
            <Link to="/" >New</Link>
          </div>

          <div className="navLinks">
            <Link to="/" >User</Link>
            <Link to="/" >Logout</Link>
          </div>
        </div>
      </section>
    </nav>
  )
}
