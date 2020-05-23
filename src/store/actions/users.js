import { createAction } from 'redux-actions';

export const types = {
  USERS_FETCH: `users/fetch`,
  USERS_FETCH_START: `users/fetch-start`,
  USERS_FETCH_SUCCESS: `users/fetch-success`,
  USERS_FETCH_FAILED: `users/fetch-failed`,
};

export default {
  fetchUsers: createAction(types.USERS_FETCH),
  fetchUsersStart: createAction(types.USERS_FETCH_START),
  fetchUsersSuccess: createAction(types.USERS_FETCH_SUCCESS),
  fetchUsersFailed: createAction(types.USERS_FETCH_FAILED),
};
