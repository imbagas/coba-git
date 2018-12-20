import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import Vacancypage from '../pages/Vacancypage'
import Applicationstatus from '../pages/Applicationstatus'
import Applicationinv from '../pages/Applicationinv'
import Welcomeregist from '../pages/Welcomeregist'
import AuthRoute from './AuthRoute'
import UserRoute from './UserRoute'
import NormalRoute from './NormalRoute'


const Routes = () => (
  // <BrowserRouter>
    <Switch>
      <NormalRoute exact path='/' component={Home} />
      <NormalRoute exact path='/Vacancypage' component={Vacancypage} />
      <NormalRoute exact path='/Applicationstatus' component={Applicationstatus} />
      <NormalRoute exact path='/Applicationinv' component={Applicationinv} />
      <NormalRoute exact path='/Welcomeregist' component={Welcomeregist} />
      <AuthRoute exact path="/login" component={Login}/>
      <AuthRoute exact path="/register" component={Register}/>
      <UserRoute exact path="/profile" component={Profile}/>
    </Switch>
  // </BrowserRouter>
)

export default Routes
