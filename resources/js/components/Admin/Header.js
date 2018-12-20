import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logoutUser } from './redux/actions/authActions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from './validations/common/isEmpty'


class Header extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  logout(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    let { user } = this.props;

    if (!isEmpty(user)) {
      user = JSON.parse(user);
    }

    return(
      <nav className='navbar navbar-expand-md navbar-light'>
      {/* // <nav className='navbar navbar-expand-md navbar-dark bg-dark navbar-laravel'> */}
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>HR Roster</Link>
          <ul className="navbar-nav">
            { isEmpty(user) &&
            <li className="nav-item">
              <Link className="nav-link" to='/login'>Login</Link>
            </li>
            }
            { isEmpty(user) &&
            <li className="nav-item">
              <Link className="nav-link" to='/register'>Register</Link>
            </li>
            }
           { !isEmpty(user) &&
            <li className="nav-item">
              <label className="nav-link">Hi! {user.first_name}</label>
            </li>
            }
           { !isEmpty(user) &&
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            }
           { !isEmpty(user) &&
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={this.logout.bind(this)}>Logout</Link>
            </li>
            }
          </ul>
        </div>
      </nav>
    )
  }
}

Header.propTypes = {
  user: PropTypes.object,
  logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  user: state.auth.user
})

const mapDispatchToProps = {
  logoutUser,
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)
