import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../common/Header';

// import Sidebar from '../../components/admin/common/sidebar';
// import Main from '../../components/admin/common/main';
import FlashMessageList from '../common/FlashMessageList';
// import 'react-sortable-tree/style.css';

const AuthRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render = {props =>
      (auth.isAuthenticated === false) ? (
      <div>
        <Component {...props} />
        <FlashMessageList/>
      </div>
      ) : (
        // this.props.history.goBack()
        // custom route buat balik ke goBack redirect
        <Redirect to="/" />
      )
    }
  />
);

AuthRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  // allowedRoles: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(AuthRoute)
