import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/authActions'
import { addFlashMessage } from '../redux/actions/cmsActions'
import TextFieldGroup from '../common/TextFieldGroup'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    if (!!this.state.errors[e.target.name]) {
      const errors = Object.assign({}, this.state.errors)
      delete errors[e.target.name]
      this.setState({ [e.target.name]: e.target.value, errors })
    } else {
      this.setState({ [e.target.name]: e.target.value})
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
      remember: this.state.remember
    };

    this.props.loginUser(userData)
    .then((res) => {
      this.props.history.push('/');
      this.props.addFlashMessage({
        type: 'success',
        text: 'Selamat Datang !'
      })
    })
    .catch((err) => {
      this.setState({ errors: err.response.data, isLoading: false });
    });

  }

  render() {
    let { email, password, errors } = this.state;

    return(
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            id="email"
            type="email"
            name="email"
            label="Email"
            placeholder="Your Email"
            value={email}
            error={errors.email}
            onChange={this.onChange}
          />
          <TextFieldGroup
            id="password"
            type="password"
            name="password"
            label="Password"
            placeholder="Your Password"
            value={password}
            error={errors.password}
            onChange={this.onChange}
          />
          <button type="submit" className="btn btn-dark">Login</button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  loginUser,
  addFlashMessage
}

export default connect(null, mapDispatchToProps)(Login)
