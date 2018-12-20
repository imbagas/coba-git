import axios from 'axios';
import jwt_decode from 'jwt-decode';
import store from '../redux/store';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser, logoutUser } from '../redux/actions/authActions';
// import { setDarkTheme } from '../redux/actions/cmsActions';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);

  const decoded = jwt_decode(localStorage.jwtToken);

  if(localStorage.user) {
    store.dispatch(setCurrentUser(localStorage.user));
  }

  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    // window.location.href = '/auth/login';
    window.location.href = '/';
  }

  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response.status === 401 || error.response.data === 'Unauthorized') {
      store.dispatch(logoutUser());
      // window.location.href = '/auth/login';
      window.location.href = '/';
    }

    return Promise.reject(error);
  });

}

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// const darkTheme = localStorage.darkTheme;

// if ("darkTheme" in localStorage !== 'undefined') {
  // if (localStorage.darkTheme) {
    // store.dispatch(setDarkTheme());
    // buat dark theme based on input
    // if (localStorage.darkTheme === 'false'){

    // } else {
    //   console.log('dd');

    // }
  // }
  // } else {
    // console.log('ss',localStorage.getItem('darkTheme'));
  // console.log(localStorage.darkTheme);
  // }
// }
