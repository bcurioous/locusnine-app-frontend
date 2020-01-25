/*
 *
 * UserListPage reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SAVE_USER,
  SAVE_USER_SUCCESS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from './constants';
export const initialState = {
  save: {
    loading: false,
    error: false,
    response: {},
  },
  getUsers: {
    loading: true,
    error: false,
    data: [],
  },
};

/* eslint-disable default-case, no-param-reassign */
const userListPageReducer = (state = initialState, action) => {
  console.log('userListPageReducer  :', action);

  return produce(state, (/* draft */) => {
    switch (action.type) {
      case SAVE_USER:
        state.save.loading = true;
        state.save.error = false;
        return state;
      case SAVE_USER_SUCCESS:
        state.save.response = action.user;
        state.save.loading = false;
        state.save.error = false;

        return state;

      case GET_USERS_SUCCESS:
        state.getUsers.loading = false;
        state.getUsers.data = action.data;
        state.getUsers.error = false;
        return state;

      case GET_USERS_ERROR:
        state.getUsers.loading = false;
        state.getUsers.data = false;
        state.getUsers.error = action.error;
        return state;

      case DEFAULT_ACTION:
        break;

      default:
        return state;
    }
  });
};

export default userListPageReducer;
