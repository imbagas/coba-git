import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './utils/checkJwtToken'
import Routes from './routes/routes'
import store from './redux/store'
import 'typeface-barlow'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { primaryColor, secondaryColor } from './config/colors'
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor
    },
    secondary: {
      main: secondaryColor
    },
    error: {
      main: red['A700']
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: "'Barlow', sans-serif",
    fontSize: 14
  },
  
});

class App extends Component {
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
