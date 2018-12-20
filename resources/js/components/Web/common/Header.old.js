import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logoutUser } from '../redux/actions/authActions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from '../validations/common/isEmpty'


class HeaderBagas extends Component {
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
      <div className="header">
        <section id="intro" className="section-intro">
          <div className="logo-menu">
            <nav className="navbar navbar-default affix" role="navigation">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand logo" href="index.html"><img src="img/logo.png" alt=""/></a>
                </div>
                <div className="collapse navbar-collapse" id="navbar">
                  {/* <ul className="nav navbar-nav">
                    {/* <li><a className="active" href="index.html">Home <i className="fa "></i></a></li> */}
                    {/* <li>
                      <a href="index-03.html">Careers <i className="fa fa-angle-down"></i></a>
                      <ul className="dropdown">
                        <li><a href="index-03.html">Opening Jobs</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="resume.html">Application <i className="fa fa-angle-down"></i></a>
                      <ul className="dropdown">
                        <li><a href="manage-resumes.html">Add Application</a></li>
                        <li><a href="manage-resumes.html">Edit Application</a></li>
                        <li><a href="manage-applications.html">Application Status</a></li>
                      </ul>
                    </li>
                  </ul> */}
                  {/* <ul className="nav navbar-nav">
                    <li><a href="#">Vacancy</a></li>
                  </ul> */}
                  <ul className="nav navbar-nav navbar-right float-right">
                    <li className="left"><Link to="/register"><i className="ti-pencil-alt"></i> Register</Link></li>
                    <li className="right"><Link to="/login"><i className="ti-lock"></i> Login</Link></li>
                    {/* <li className="left"><a href="login.html"><i className="ti-pencil-alt"></i>Sign Up</a></li>
                    <li className="right"><a href="login.html"><i className="ti-lock"></i>  Sign In</a></li> */}
                  </ul>
                </div>
              </div>
            </nav>
          {/* <div className="search-container">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1>Join iMMAP</h1><br/><h2>To Help <strong>the growth</strong> of world data</h2>
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </section>
      </div>
    )
  }
}

HeaderBagas.propTypes = {
  user: PropTypes.string.isRequired,
  logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  user: state.auth.user
})

const mapDispatchToProps = {
  logoutUser,
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderBagas)
