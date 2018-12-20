import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function loginUser(userData) {
  return dispatch => {
    return axios.post('/api/login', userData)
      .then(res => {
        const { token, user } = res.data;
        localStorage.setItem('jwtToken', token);
        const userStringify = JSON.stringify(user);
        localStorage.setItem('user', userStringify);
        setAuthToken(token);
        const decodedToken = jwt_decode(token);
        // dispatch(setCurrentUser(decodedToken));
        dispatch(setCurrentUser(userStringify));
      });
  }
}

export function logoutUser() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    axios.get('/api/logout');
  }
}

export function registerUser() {
  return dispatch => {
    return axios.post('/api/register', userData)
      .then(res => {
        const { token, user } = res.data;
        localStorage.setItem('jwtToken', token);
        const userStringify = JSON.stringify(user);
        localStorage.setItem('user', userStringify);
        setAuthToken(token);
        const decodedToken = jwt_decode(token);
        // dispatch(setCurrentUser(decodedToken));
        dispatch(setCurrentUser(userStringify));
      })
  }
}

// export const loginUser = (userData) => (dispatch) => {
//   axios.post('/api/auth/login', userData)
//     .then( res => {
//       const { token } = res.data;
//       console.log(token);
//       // localStorage.setItem('jwtToken', token);


//     })
//     .catch( err => dispatch({
//       type: 'GET_ERRORS',
//       payload: err.response.data
//     }));
// }
