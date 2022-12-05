import React from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { LoginPage } from './features/users/LoginPage'
import { LeaderBoardPage } from './features/users/LeaderBoardPage'
import { QuestionsPage } from './features/questions/QuestionsPage'
import { SingleQuestionPage } from './features/questions/SingleQuestionPage'
import { NewQuestionPage } from './features/questions/NewQuestionPage'

function App() {
  const userId = useSelector(state => state.users.auth.userId)
  const isLoggedIn = Boolean(userId)

  if (!isLoggedIn) {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/login"
            component={LoginPage} />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
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
              path="/add"
              component={NewQuestionPage} />
            <Route
              exact
              path="/leaderboard"
              component={LeaderBoardPage} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
