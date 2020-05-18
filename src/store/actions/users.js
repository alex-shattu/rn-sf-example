import { createAction } from 'redux-actions';

export const types = {
  USERS_GET: `users/get`,
  USERS_FETCH_START: `users/fetch-start`,
  USERS_FETCH_SUCCESS: `users/fetch-success`,
  USERS_FETCH_FAILED: `users/fetch-failed`,
};

export default {
  getUsers: createAction(types.USERS_GET),
  fetchUsersStart: createAction(types.USERS_FETCH_START),
  fetchUsersSuccess: createAction(types.USERS_FETCH_SUCCESS),
  fetchUsersFailed: createAction(types.USERS_FETCH_FAILED),
};
