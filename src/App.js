import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar';
import { LoginPage } from './features/authentication/LoginPage';

function App() {
  const isLoggedIn = false;
  return (
    <Router>
      {!isLoggedIn ? (
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Redirect to="/login" />
        </Switch>
      ) : (
        <div>
          <Navbar />
          <div className="App">
            <Switch>
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      )}
    </Router>
  )
}

export default App
