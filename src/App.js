import React from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { LoginPage } from './features/users/LoginPage'
import { QuestionsPage } from './features/questions/QuestionsPage'

function App() {
  const userId = useSelector(state => state.users.auth.userId)
  const isLoggedIn = Boolean(userId)

  return (
    <Router>
      {!isLoggedIn ? (
        <Switch>
          <Route
            path="/login"
            component={LoginPage} />
          <Redirect to="/login" />
        </Switch>
      ) : (
        <div>
          <Navbar />
          <div className="App">
            <Switch>
              <Route
                exact
                path="/"
                component={QuestionsPage} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      )}
    </Router>
  )
}

export default App
