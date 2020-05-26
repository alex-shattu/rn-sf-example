import { put, takeEvery } from 'redux-saga/effects';
import profileActions, { types } from 'store/actions/profile';

export function* getProfileSaga() {
  yield takeEvery(types.PROFILE_GET, makeGetProfile);
}

export function* updateProfileSaga() {
  yield takeEvery(types.PROFILE_UPDATE, makeUpdateProfile);
}

export function* updateAvatarProfileSaga() {
  yield takeEvery(types.PROFILE_AVATAR_UPDATE, makeUpdateAvatarProfile);
}

function* makeGetProfile({ payload }) {
  try {
    yield put(profileActions.fetchProfileStart());
  } catch (error) {
    yield put(profileActions.fetchProfileFailed());
  }
}

function* makeUpdateProfile({ payload: data }) {
  try {
    // yield put(profileActions.fetchProfileStart());
    yield put(profileActions.fetchProfileSuccess(data));
  } catch (error) {
    yield put(profileActions.fetchProfileFailed());
  }
}

function* makeUpdateAvatarProfile({ payload }) {
  try {
    yield put(profileActions.fetchProfileStart());
  } catch (error) {
    yield put(profileActions.fetchProfileFailed());
  }
}
