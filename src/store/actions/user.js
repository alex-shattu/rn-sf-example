import { createAction } from 'redux-actions';

export const types = {
  USER_GET: `user/get`,
  USER_FETCH_START: `user/fetch-start`,
  USER_FETCH_SUCCESS: `user/fetch-success`,
  USER_FETCH_FAILED: `user/fetch-failed`,
};

export default {
  getUser: createAction(types.USER_GET),
  fetchUserStart: createAction(types.USER_FETCH_START),
  fetchUserSuccess: createAction(types.USER_FETCH_SUCCESS),
  fetchUserFailed: createAction(types.USER_FETCH_FAILED),
};
