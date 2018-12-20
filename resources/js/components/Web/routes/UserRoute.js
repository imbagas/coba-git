import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import Footer from '../common/Footer';
// import Sidebar from '../../components/admin/common/sidebar';
// import Main from '../../components/admin/common/main';
// import FlashMessageList from '../../components/admin/common/flashmessagelist';
// import 'react-sortable-tree/style.css';

const UserRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render = {props =>
      (auth.isAuthenticated === true) ? (
        <div>
              <Header />
              {/* <Sidebar />
              <Main> */}
              <Component {...props} />
              {/* </Main>
              <FlashMessageList/> */}
                <Footer />
        </div>
      ) : (
        // <Redirect to='/auth/login'/>
        <Redirect to='/'/>
      
      )
    }
  />
);

UserRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  // allowedRoles: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(UserRoute);
