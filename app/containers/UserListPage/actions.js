/*
 *
 * UserListPage actions
 *
 */

import {
  DEFAULT_ACTION,
  SAVE_USER,
  SAVE_USER_SUCCESS,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from './constants';

export function saveUser(userObj) {
  // console.log('userObj :: ', userObj);
  return {
    type: SAVE_USER,
    userObj,
  };
}
export function getUsers() {
  return {
    type: GET_USERS,
  };
}
export function onGetUserSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}
export function onGetUserError(error) {
  return {
    type: GET_USERS_ERROR,
    error,
  };
}

export function onSaveUserSuccess(user) {
  // console.log('storeUserData :: ', user);
  return {
    type: SAVE_USER_SUCCESS,
    user,
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
