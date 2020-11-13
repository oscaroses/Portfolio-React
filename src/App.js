import React from 'react';
import Home from './components/Home/index.jsx'
import { Route, Switch, Redirect } from 'react-router-dom';

export default function App() {
  return (
    <Switch>
      <Redirect exact from="/home" to="/home/profile" />
      <Route exact path="/home/:page?" render={props => <Home {...props} />} />
    </Switch>
  )
}
