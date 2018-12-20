import {
  // SET_HEADING, SET_SIDENAV_ACTIVE, SET_HIDE_SIDENAV, SET_DARK_THEME, SET_ADD_BTN,
  ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from './types';

// export function setHeading(text) {
//   return {
//     type: SET_HEADING,
//     text
//   }
// }

// export function setSideNavActive(text) {
//   return {
//     type: SET_SIDENAV_ACTIVE,
//     text
//   }
// }

// export function setHideSideNav() {
//   return {
//     type: SET_HIDE_SIDENAV
//   }
// }

// export function setDarkTheme(status) {
//   return {
//     type: SET_DARK_THEME,
//     status
//   }
// }

// export function setAddBtn(btnUrl, btnText, btnStyle, btnIcon) {
//   return {
//     type: SET_ADD_BTN,
//     btnUrl,
//     btnText,
//     btnStyle,
//     btnIcon
//   }
// }

export function addFlashMessage(message) {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  }
}

export function deleteFlashMessage(id) {
  return {
    type: DELETE_FLASH_MESSAGE,
    id
  }
}
