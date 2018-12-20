import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import LockIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import mainLogo from '../../../../img/logo.png'
import { validateRegister } from '../validations/auth'
import isEmpty from '../validations/common/isEmpty'
import TextField from '@material-ui/core/TextField'
import { registerUser } from '../redux/actions/authActions'
import { addFlashMessage } from '../redux/actions/webActions'

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
    marginBottom: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});


class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      middle_name: '',
      family_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  isValid() {
    const { errors, isValid } = validateRegister(this.state)

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
      this.setState({ [e.target.name]: e.target.value, errors }, () => {this.isValid()} )
    } else {
      this.setState({ [e.target.name]: e.target.value}, () => {this.isValid()} )
    }
  }

  onSubmit(e) {
    e.preventDefault()

    let { first_name, middle_name, family_name, email, password, password_confirmation } = this.state

    const userData = {
      first_name: first_name,
      middle_name: middle_name,
      family_name: family_name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }

    this.props.registerUser(userData)
    .then((res) => {
      // this.props.history.push('/')
      this.props.history.goBack()
      this.props.addFlashMessage({
        type: 'success',
        text: 'Welcome !'
      })
    })
    .catch((err) => {
      // this.setState({ errors: err.response.data, isLoading: false })
      this.props.addFlashMessage({
        type: 'error',
        text: 'Server Error !'
      })
    })
  }

  render() {
    let { first_name, middle_name, family_name, email, password, password_confirmation, errors } = this.state
    const { classes } = this.props;

    return(
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
        <Link to="/">
          <img src={mainLogo} alt="immap career" height="60px" width="220px"/>
        </Link>
        <form className={classes.form} onSubmit={this.onSubmit}>
          <TextField
            id="first_name"
            label="First Name"
            autoComplete="name"
            autoFocus
            margin="normal"
            required
            fullWidth
            name="first_name"
            value={first_name}
            onChange={this.onChange}
            error={!isEmpty(errors.first_name)}
            helperText={errors.first_name}
          />
          <TextField
            id="middle_name"
            label="Middle Name"
            autoComplete="name"
            margin="normal"
            required
            fullWidth
            name="middle_name"
            value={middle_name}
            onChange={this.onChange}
            error={!isEmpty(errors.middle_name)}
            helperText={errors.middle_name}
          />
          <TextField
            id="family_name"
            label="Family Name"
            autoComplete="name"
            margin="normal"
            required
            fullWidth
            name="family_name"
            value={family_name}
            onChange={this.onChange}
            error={!isEmpty(errors.family_name)}
            helperText={errors.family_name}
          />
          <TextField
            id="email"
            label="Email Address"
            autoComplete="email"
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
          <TextField
            id="password_confirmation"
            label="Password Confirmation"
            // autoComplete="current-password"
            margin="normal"
            required
            fullWidth
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.onChange}
            error={!isEmpty(errors.password_confirmation)}
            helperText={errors.password_confirmation}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
        </form>
      </Paper>
    </main>
    )
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  registerUser,
  addFlashMessage
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(Register))
