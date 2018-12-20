import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
  // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  // axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
};

export default setAuthToken;
