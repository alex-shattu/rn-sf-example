import { createAction } from 'redux-actions';

export const types = {
  PROFILE_GET: 'profile/get',
  PROFILE_UPDATE: 'profile/update',
  PROFILE_AVATAR_UPDATE: 'profile/avatar-update',
  PROFILE_FETCH_START: 'profile/fetch-start',
  PROFILE_FETCH_SUCCESS: 'profile/fetch-success',
  PROFILE_FETCH_FAILED: 'profile/fetch-failed',
};

export default {
  getProfile: createAction(types.PROFILE_GET),
  updateProfile: createAction(types.PROFILE_UPDATE),
  updateAvatarProfile: createAction(types.PROFILE_AVATAR_UPDATE),
  fetchProfileStart: createAction(types.PROFILE_FETCH_START),
  fetchProfileSuccess: createAction(types.PROFILE_FETCH_SUCCESS),
  fetchProfileFailed: createAction(types.PROFILE_FETCH_FAILED),
};
