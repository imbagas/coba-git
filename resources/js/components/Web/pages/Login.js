import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../redux/actions/authActions'
import { addFlashMessage } from '../redux/actions/webActions'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import TextField from '@material-ui/core/TextField'
import mainLogo from '../../../../img/logo.png'
import { validateLogin } from '../validations/auth'
import isEmpty from '../validations/common/isEmpty'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit * 2,
  },

  submit: {
    marginTop: theme.spacing.unit * 3,
  },
})

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      remember: false,
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.changeRemember = this.changeRemember.bind(this)
  }

  isValid() {
    const { errors, isValid } = validateLogin(this.state)

    if (!isValid) {
      this.setState({ errors })
    } else {
      this.setState({ errors: {} })
    }

    return isValid
  }


  onChange(e) {
    if (!!this.state.errors[e.target.name]) {
      const errors = Object.assign({}, this.state.errors)
      delete errors[e.target.name]
      this.setState({ [e.target.name]: e.target.value, errors }, () => {this.isValid()})
    } else {
      this.setState({ [e.target.name]: e.target.value }, () => {this.isValid()} )
    }
  }

  onSubmit(e) {
    e.preventDefault()
    // console.log('sds');

    const userData = {
      email: this.state.email,
      password: this.state.password,
      remember: this.state.remember
    }

    if(this.isValid()) {
      this.props.loginUser(userData)
      .then((res) => {
        // this.props.history.push('/')
        this.props.history.goBack()
        this.props.addFlashMessage({
          type: 'success',
          text: 'Welcome !'
        })
      })
      .catch((err) => {
        console.log(err)
        // this.setState({ errors: err.response.data, isLoading: false })
      })
    }

  }

  changeRemember() {
    const { remember } = this.state
    if(remember) {
      this.setState({ remember: false })
    } else {
      this.setState({ remember: true })
    }
  }

  render() {
    let { email, password, remember, errors } = this.state
    const { classes } = this.props

    return(
      <main className={classes.main} >
        <CssBaseline />
        <Paper className={classes.paper}>
          <Link to="/">
            <img src={mainLogo} alt="immap career" height="60px" width="220px"/>
          </Link>
          <form className={classes.form} onSubmit={this.onSubmit}>
            <TextField
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              margin="normal"
              required
              fullWidth
              name="email"
              value={email}
              onChange={this.onChange}
              error={!isEmpty(errors.email)}
              helperText={errors.email}
            />
            <TextField
              id="password"
              label="Password"
              autoComplete="current-password"
              margin="normal"
              required
              fullWidth
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
              error={!isEmpty(errors.password)}
              helperText={errors.password}
            />
            <FormControlLabel
              control={<Checkbox name="remember" color="primary" onChange={this.changeRemember}/>}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            Log In
            </Button>
          </form>
        </Paper>

      </main>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

const mapDispatchToProps = {
  loginUser,
  addFlashMessage
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(Login))
