import { all, call } from 'redux-saga/effects';

import { getProfileSaga, updateProfileSaga, updateAvatarProfileSaga } from './profile';
// import { setSettingsSaga } from './settings';
import { fetchUsersSaga } from './users';
import { getUserSaga } from './user';

export default function* rootSaga() {
  yield all([
    call(getProfileSaga),
    call(updateProfileSaga),
    call(updateAvatarProfileSaga),
    // call(setSettingsSaga),
    call(fetchUsersSaga),
    call(getUserSaga),
  ]);
}
