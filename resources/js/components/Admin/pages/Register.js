import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextFieldGroup from '../common/TextFieldGroup'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      middle_name: '',
      last_name: '',
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

    let { first_name, middle_name, last_name, email, password } = this.state

    const userData = {
      first_name: first_name,
      middle_name: middle_name,
      last_name: last_name,
      email: email,
      password: password
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
    let { first_name, middle_name, last_name, email, password, errors } = this.state;

    return(
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            id="first_name"
            type="text"
            name="first_name"
            label="First Name"
            placeholder="First Name"
            value={first_name}
            error={errors.first_name}
            onChange={this.onChange}
          />
          <TextFieldGroup
            id="middle_name"
            type="text"
            name="middle_name"
            label="Middle Name"
            placeholder="Middle Name"
            value={middle_name}
            error={errors.middle_name}
            onChange={this.onChange}
          />
          <TextFieldGroup
            id="last_name"
            type="text"
            name="last_name"
            label="Last Name"
            placeholder="Last Name"
            value={last_name}
            error={errors.last_name}
            onChange={this.onChange}
          />
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
          <button type="submit" className="btn btn-dark">Register</button>
        </form>
      </div>
    )
  }
}

export default Register
