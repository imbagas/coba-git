import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import Footer from '../common/Footer';
// import Main from '../common/Main';
// import Sidebar from '../../components/admin/common/sidebar';
// import Main from '../../components/admin/common/main';
import FlashMessageList from '../common/FlashMessageList';
// import 'react-sortable-tree/style.css';

const NormalRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render = {props => (
        <div>
              <Header />
              {/* <Sidebar /> */}
              {/* <Main> */}
              {/* <div className="component-container"> */}
              <Component {...props} />
              {/* </div> */}
              {/* </Main> */}
              <FlashMessageList/>
              <Footer />
        </div>
      )
    }
  />
);

// NormalRoute.propTypes = {
//   auth: PropTypes.object.isRequired,
//   // allowedRoles: PropTypes.array.isRequired
// }

// const mapStateToProps = state => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps)(NormalRoute);
export default NormalRoute;
