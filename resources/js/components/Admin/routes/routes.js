import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from '../pages/Profile'

const Routes = () => (
  // <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/profile" component={Profile}/>
    </Switch>
  // </BrowserRouter>
)

export default Routes