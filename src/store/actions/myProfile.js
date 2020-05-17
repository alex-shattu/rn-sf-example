import { createAction } from 'redux-actions';

const prefix = 'profie';

export const types = {
  MY_PROFILE_GET: `${prefix}/get`,
  MY_PROFILE_UPDATE: `${prefix}/update`,
  MY_PROFILE_AVATAR_UPDATE: `${prefix}/avatar-update`,
  MY_PROFILE_FETCH_START: `${prefix}/fetch-start`,
  MY_PROFILE_FETCH_SUCCESS: `${prefix}/fetch-success`,
  MY_PROFILE_FETCH_FAILED: `${prefix}/fetch-failed`,
};

export default {
  getMyProfile: createAction(types.MY_PROFILE_GET),
  updateMyProfile: createAction(types.MY_PROFILE_UPDATE),
  updateAvatarMyProfile: createAction(types.MY_PROFILE_AVATAR_UPDATE),
  fetchMyProfileStart: createAction(types.MY_PROFILE_FETCH_START),
  fetchMyProfileSuccess: createAction(types.MY_PROFILE_FETCH_SUCCESS),
  fetchMyProfileFailed: createAction(types.MY_PROFILE_FETCH_FAILED),
};
