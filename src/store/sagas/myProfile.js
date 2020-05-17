import { put, takeEvery } from 'redux-saga/effects';
import myProfileActions, { types } from '../actions/myProfile';

export function* getMyProfileSaga() {
  yield takeEvery(types.MY_PROFILE_GET, makeGetMyProfile);
}

export function* updateMyProfileSaga() {
  yield takeEvery(types.MY_PROFILE_UPDATE, makeUpdateMyProfile);
}

export function* updateAvatarMyProfileSaga() {
  yield takeEvery(types.MY_PROFILE_AVATAR_UPDATE, makeUpdateAvatarMyProfile);
}

function* makeGetMyProfile({ payload }) {
  try {
    yield put(myProfileActions.fetchMyProfileStart());
  } catch (error) {
    yield put(myProfileActions.fetchMyProfileFailed());
  }
}

function* makeUpdateMyProfile({ payload }) {
  try {
    yield put(myProfileActions.fetchMyProfileStart());
  } catch (error) {
    yield put(myProfileActions.fetchMyProfileFailed());
  }
}

function* makeUpdateAvatarMyProfile({ payload }) {
  try {
    yield put(myProfileActions.fetchMyProfileStart());
  } catch (error) {
    yield put(myProfileActions.fetchMyProfileFailed());
  }
}
