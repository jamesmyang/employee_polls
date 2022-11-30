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
import { SingleQuestionPage } from './features/questions/SingleQuestionPage'
import { NewQuestionPage } from './features/questions/NewQuestionPage'

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
              <Route
                exact
                path="/questions/:question_id"
                component={SingleQuestionPage} />
              <Route
                exact
                path="/newpoll"
                component={NewQuestionPage} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      )}
    </Router>
  )
}

export default App
