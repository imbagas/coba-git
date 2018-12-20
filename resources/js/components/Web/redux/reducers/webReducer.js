import {
  // SET_HEADING, SET_SIDENAV_ACTIVE, SET_HIDE_SIDENAV, SET_DARK_THEME, SET_ADD_BTN
  ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../actions/types';
import shortid from 'shortid';
import { findIndex } from 'lodash';

const initialState = {
  // heading: '',
  // sideNavActive: '',
  // hideSidebar: false,
  // darkTheme: false,
  flashMessage: [],
  // addBtn: {
  //   btnUrl: '',
  //   btnText: '',
  //   btnStyle: 'success',
  //   btnIcon: []
  // }
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    // case SET_HEADING:
    //   return {
    //     ...state,
    //     heading: action.text
    //   }
    // case SET_SIDENAV_ACTIVE:
    //   return {
    //     ...state,
    //     sideNavActive: action.text
    //   }
    // case SET_HIDE_SIDENAV:
    //   return {
    //     ...state,
    //     hideSidebar: (state.hideSidebar) ? false : true
    //   }
    // case SET_DARK_THEME:
    //   var darkStatus = (state.darkTheme) ? false : true;

    //   if (action.status){
    //     darkStatus = (action.status === 'true') ? true : false;
    //   } else if (typeof localStorage.darkTheme !== 'undefined') {
    //     darkStatus = (localStorage.darkTheme === 'true') ? false : true;
    //     localStorage.setItem('darkTheme', darkStatus);
    //   } else {
    //     localStorage.setItem('darkTheme', darkStatus);
    //   }

    //   return {
    //     ...state,
    //     darkTheme: darkStatus
    //   }
    // case SET_ADD_BTN:
    //   return {
    //     ...state,
    //     addBtn: {
    //       btnUrl: action.btnUrl,
    //       btnText: action.btnText,
    //       btnStyle: action.btnStyle,
    //       btnIcon: action.btnIcon
    //     }
    //   }
    case ADD_FLASH_MESSAGE:
      return {
        ...state,
        flashMessage: [...state.flashMessage, { id: shortid.generate(), type: action.message.type, text: action.message.text }]
      }
    case DELETE_FLASH_MESSAGE:
      const index = findIndex(state.flashMessage, { id: action.id });
      if (index >= 0) {
        return {
          ...state,
          flashMessage: [
            ...state.flashMessage.slice(0, index),
            ...state.flashMessage.slice(index + 1)
          ]
        }
      }
      return state;
    default: return state;
  }
}
