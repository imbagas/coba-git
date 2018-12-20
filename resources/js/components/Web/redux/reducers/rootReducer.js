import { combineReducers } from 'redux';

import auth from './authReducer';
import web from './webReducer';
// import dataTable from './dataTableReducer';
// import dataTree from './dataTreeReducer';
// import crud from './crudReducer';

export default combineReducers({
  auth,
  web
  // cms,
  // dataTable,
  // dataTree,
  // crud
});
