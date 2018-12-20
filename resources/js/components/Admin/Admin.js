import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './utils/checkJwtToken'
import Routes from './routes/routes'
import store from './redux/store'
import Header from './Header'

class Admin extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header/>
            <Routes/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<Admin />, document.getElementById('admin'))
